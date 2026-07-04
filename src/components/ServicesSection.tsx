"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, HardHat, TrendingUp, ShieldCheck } from "lucide-react";

const servicios = [
  {
    icon: ClipboardCheck,
    title: "Gerencia de Proyectos",
    description:
      "Planificación, coordinación y control integral de proyectos. Garantizamos el cumplimiento de alcance, tiempo y presupuesto en cada etapa.",
  },
  {
    icon: HardHat,
    title: "Interventoría Técnica",
    description:
      "Supervisión técnica independiente que asegura la calidad, el cumplimiento normativo y la correcta ejecución de obras civiles e infraestructura.",
  },
  {
    icon: TrendingUp,
    title: "Consultoría Estratégica",
    description:
      "Asesoría especializada para la toma de decisiones, optimización de procesos y gestión de riesgos en proyectos de construcción.",
  },
  {
    icon: ShieldCheck,
    title: "Control de Calidad",
    description:
      "Implementación de sistemas de gestión de calidad, inspección de materiales y verificación de especificaciones técnicas.",
  },
];

const ServicesSection = () => {
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
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <span className="section-badge mb-4 inline-flex">Lo que hacemos</span>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Brindamos soluciones integrales que acompañan a nuestros clientes desde la concepción hasta la entrega final.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`group bg-white border border-border rounded-xl p-7 card-lift cursor-default transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 150}ms` }}
              >
                <div className="w-12 h-12 bg-blue-pale rounded-xl flex items-center justify-center mb-5 group-hover:bg-navy group-hover:shadow-navy transition-all duration-300">
                  <Icon size={22} className="text-blue-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-navy text-base font-bold mb-2">
                  {srv.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
