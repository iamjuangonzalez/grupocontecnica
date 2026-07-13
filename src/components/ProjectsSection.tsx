"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Building2, Warehouse, Milestone, ArrowRight } from "lucide-react";

const proyectos = [
  {
    icon: Building2,
    categoria: "Comercial",
    titulo: "Centro Empresarial Zona Rosa",
    descripcion: "Interventoría técnica y gerencia de obra para complejo de oficinas de 18 pisos en Bogotá.",
    valor: "$24.000M",
    año: "2023",
    color: "bg-blue-pale text-blue-brand",
  },
  {
    icon: Warehouse,
    categoria: "Industrial",
    titulo: "Planta Logística Norte",
    descripcion: "Gerencia integral de construcción de bodega logística de 12.000 m² en la Sabana de Bogotá.",
    valor: "$8.500M",
    año: "2022",
    color: "bg-secondary text-navy",
  },
  {
    icon: Milestone,
    categoria: "Infraestructura",
    titulo: "Vía Terciaria Cundinamarca",
    descripcion: "Interventoría de obras de infraestructura vial para mejoramiento de conectividad regional.",
    valor: "$15.000M",
    año: "2024",
    color: "bg-blue-pale text-blue-brand",
  },
];

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="proyectos" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div>
            <span className="section-badge mb-3">Portafolio</span>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-extrabold mt-3">
              Proyectos Destacados
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-xs text-sm leading-relaxed">
            Selección de proyectos donde nuestra consultoría marcó la diferencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.titulo}
                className={`group bg-white border border-border rounded-xl overflow-hidden card-lift cursor-default transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120 + 100}ms` }}
              >
                {/* Top color band */}
                <div className="h-1.5 bg-gradient-blue w-full" />

                <div className="p-7">
                  {/* Icon + badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.color}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-muted-foreground text-xs">{p.año}</span>
                      <span className="font-body text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-navy-mid">
                        {p.categoria}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-navy text-lg font-bold mb-2">
                    {p.titulo}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                    {p.descripcion}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="font-body text-muted-foreground text-xs block mb-0.5">Valor</span>
                      <span className="font-display text-navy font-bold text-base">{p.valor} COP</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-pale flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-brand group-hover:text-white transition-colors duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA a portafolio completo */}
        <div className="mt-12 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-body text-sm font-semibold text-white transition-all duration-200 hover:bg-navy-mid hover:gap-3 shadow-navy"
          >
            Ver proyectos ejecutados <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
