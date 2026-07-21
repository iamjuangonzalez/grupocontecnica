"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const marcas = [
  { src: "/marcas/CYG.png",        alt: "CYG" },
  { src: "/marcas/caribbean.png",  alt: "Caribbean" },
  { src: "/marcas/coninsa.png",    alt: "Coninsa" },
  { src: "/marcas/owen.svg",       alt: "Owen" },
  { src: "/marcas/pcm.png",        alt: "PCM" },
  { src: "/marcas/pijao.jpeg",     alt: "Pijao" },
  { src: "/marcas/therrestra.webp", alt: "Therrestra" },
];

const FooterSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-navy to-[hsl(215_70%_16%)]">
      {/* Glow radiante */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-blue-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-brand/60 to-transparent" />

      {/* Marcas aliadas */}
      <div className="relative container mx-auto pt-12">
        <p className="text-center font-body text-white/40 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Marcas aliadas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {marcas.map((m) => (
            <div
              key={m.src}
              className="flex h-16 w-32 items-center justify-center rounded-xl bg-white px-4 shadow-lg shadow-black/20 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1"
            >
              <Image
                src={m.src}
                alt={m.alt}
                width={120}
                height={48}
                unoptimized={m.src.endsWith(".svg")}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo_w.png"
                alt="Grupo Contécnica"
                width={696}
                height={359}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="font-body text-white/65 text-sm leading-relaxed max-w-xs mb-5">
              Gerencia e Interventoría de Proyectos de construcción en Colombia. Soluciones estratégicas, resultados reales.
            </p>
            <button
              onClick={() => scrollTo("contacto")}
              className="inline-flex items-center gap-2 font-body text-blue-brand text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Solicitar Cotización <ArrowRight size={14} />
            </button>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-body text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio",    id: "inicio" },
                { label: "Servicios", id: "servicios" },
                { label: "Proyectos", id: "proyectos" },
                { label: "Nosotros",  id: "nosotros" },
                { label: "Contacto",  id: "contacto" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="font-body text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-white text-xs font-semibold tracking-widest uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-blue-brand mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/65 text-xs leading-relaxed">
                  Calle 174b No 55c 10<br />Bogotá, Colombia
                </span>
              </li>
              <li>
                <a href="mailto:gerencia@gcontecnica.com" className="flex items-center gap-2 text-white/65 hover:text-white transition-colors">
                  <Mail size={13} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-xs">gerencia@gcontecnica.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+573165699584" className="flex items-center gap-2 text-white/65 hover:text-white transition-colors">
                  <Phone size={13} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-xs">+57 (316) 569-9584</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/573165699584" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/65 hover:text-white transition-colors">
                  <MessageCircle size={13} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-xs font-semibold">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-body text-white/25 text-xs">
            © {new Date().getFullYear()} Grupo Contécnica. Todos los derechos reservados.
          </span>
          <span className="font-body text-white/25 text-xs">
            Bogotá, Colombia · NIT: por actualizar
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
