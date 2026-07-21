"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Ruler, Building2, MapPin, Layers, Maximize2 } from "lucide-react";

type Proyecto = {
  titulo: string;
  area: string;
  cliente: string;
  sector: string;
  ubicacion: string;
  descripcion: string;
  imagenes: string[];
};

// ponytail: datos hardcodeados; mover a src/lib cuando haya más de un puñado de proyectos.
const proyectos: Proyecto[] = [
  {
    titulo: "Hotel Four Points",
    area: "23.824 m²",
    cliente: "Caribbean Green Building Inc.",
    sector: "Hotelero",
    ubicacion: "Georgetown, Guyana",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gerencia integral e interventoría técnica de la construcción del complejo hotelero, garantizando el cumplimiento de estándares internacionales de calidad, presupuesto y cronograma. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    imagenes: Array.from({ length: 8 }, (_, i) => `/proyectos/hotel-four-points/${i + 1}.webp`),
  },
  {
    titulo: "Berbice Cricket Stadium",
    area: "36.612 m²",
    cliente: "Caribbean Green Construction Inc.",
    sector: "Deportivo",
    ubicacion: "Palmyra Berbice, Guyana",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gerencia integral e interventoría técnica de la construcción del estadio de cricket, garantizando el cumplimiento de estándares internacionales de calidad, presupuesto y cronograma. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    imagenes: Array.from({ length: 5 }, (_, i) => `/proyectos/berbice-cricket/${i + 1}.webp`),
  },
  // ponytail: placeholders — reemplazar imágenes y datos cuando lleguen los otros proyectos.
  {
    titulo: "Proyecto en construcción",
    area: "12.000 m²",
    cliente: "Cliente por confirmar",
    sector: "Industrial",
    ubicacion: "Bogotá, Colombia",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagenes: Array.from({ length: 4 }, (_, i) => `/proyectos/hotel-four-points/${i + 1}.webp`),
  },
];

const meta = [
  { icon: Ruler, label: "Área construida", key: "area" as const },
  { icon: Building2, label: "Cliente", key: "cliente" as const },
  { icon: Layers, label: "Sector", key: "sector" as const },
  { icon: MapPin, label: "Ubicación", key: "ubicacion" as const },
];

function ProjectBlock({ proyecto, first }: { proyecto: Proyecto; first: boolean }) {
  const imgs = proyecto.imagenes;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + imgs.length) % imgs.length),
    [imgs.length]
  );

  // Swipe en móvil (carrusel y lightbox)
  const touchX = useRef(0);
  const swipe = {
    onTouchStart: (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    },
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  return (
    <div className={first ? "" : "pt-16 mt-16 border-t border-border"}>
      <div className="mb-6">
        <span className="section-badge mb-3">{proyecto.sector}</span>
        <h2 className="font-display text-navy text-2xl md:text-3xl font-extrabold mt-3">
          {proyecto.titulo}
        </h2>
      </div>

      {/* Imágenes a la izquierda, card de datos a la derecha */}
      <div className="grid gap-8 lg:grid-cols-3 items-start">
        {/* min-w-0: sin esto la fila de miniaturas ensancha la columna y rompe el carrusel */}
        <div className="min-w-0 lg:col-span-2">
      {/* Carrusel */}
      <div {...swipe} className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary shadow-deep">
        <button
          onClick={() => setLightbox(true)}
          className="absolute inset-0 z-10 cursor-zoom-in"
          aria-label="Ampliar imagen"
        />
        <Image
          src={imgs[index]}
          alt={`${proyecto.titulo} — imagen ${index + 1}`}
          fill
          priority={first}
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />

        {/* Flechas */}
        <button
          onClick={() => go(-1)}
          className="absolute left-2 md:left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur transition hover:bg-navy"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-2 md:right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur transition hover:bg-navy"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={22} />
        </button>

        {/* Hint + contador */}
        <div className="pointer-events-none absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-navy/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          <Maximize2 size={12} /> {index + 1}/{imgs.length}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="mt-3 flex gap-2 overflow-x-auto p-px pb-2">
        {imgs.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg ring-2 transition ${
              i === index ? "ring-blue-brand" : "ring-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Ver imagen ${i + 1}`}
          >
            <Image src={src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        ))}
      </div>
        </div>

        {/* Card de datos */}
        <div className="rounded-2xl border border-border bg-secondary/50 p-6">
          <ul className="space-y-4">
            {meta.map(({ icon: Icon, label, key }) => (
              <li key={key} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-pale text-blue-brand">
                  <Icon size={16} />
                </div>
                <div>
                  <span className="block font-body text-xs text-muted-foreground">{label}</span>
                  <span className="font-display text-navy text-sm font-bold">{proyecto[key]}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-8 font-body text-muted-foreground leading-relaxed">{proyecto.descripcion}</p>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Siguiente"
          >
            <ChevronRight size={26} />
          </button>
          <div className="relative h-[80vh] w-[92vw] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={imgs[index]}
              alt={`${proyecto.titulo} — imagen ${index + 1}`}
              fill
              sizes="92vw"
              className="object-contain"
            />
          </div>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
            {index + 1} / {imgs.length}
          </span>
        </div>
      )}
    </div>
  );
}

const ProjectsGallery = () => (
  <div className="container mx-auto py-16">
    {proyectos.map((p, i) => (
      <ProjectBlock key={p.titulo} proyecto={p} first={i === 0} />
    ))}
  </div>
);

export default ProjectsGallery;
