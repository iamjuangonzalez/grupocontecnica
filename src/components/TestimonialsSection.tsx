"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonios = [
  {
    texto: "La interventoría de Grupo Contécnica fue clave para entregar nuestro proyecto 2 meses antes del plazo y sin sobrecostos. Su equipo técnico es de primer nivel.",
    autor: "Carlos Herrera",
    cargo: "Director de Proyectos, Constructora Andina",
    inicial: "CH",
  },
  {
    texto: "Desde el estudio de viabilidad hasta la entrega final, Contécnica fue nuestro aliado más valioso. Comunicación clara, reportes precisos y resultados sobresalientes.",
    autor: "Laura Quintero",
    cargo: "Gerente de Operaciones, Grupo Inmobiliario Norte",
    inicial: "LQ",
  },
  {
    texto: "El análisis de riesgos que realizaron nos evitó incumplimientos normativos graves. Su conocimiento de la normativa colombiana es excepcional.",
    autor: "Andrés Morales",
    cargo: "CEO, Infraestructuras del Centro",
    inicial: "AM",
  },
];

const TestimonialsSection = () => {
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
    <section className="py-24 bg-off-white" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <span className="section-badge mb-3">Opiniones</span>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-extrabold mt-3">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={t.autor}
              className={`bg-white border border-border rounded-xl p-7 card-lift transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120 + 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="text-accent fill-accent" />
                ))}
              </div>

              <Quote size={24} className="text-blue-brand/30 mb-3" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                &ldquo;{t.texto}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-white text-sm font-bold">{t.inicial}</span>
                </div>
                <div>
                  <div className="font-display text-navy text-sm font-semibold">{t.autor}</div>
                  <div className="font-body text-muted-foreground text-xs">{t.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
