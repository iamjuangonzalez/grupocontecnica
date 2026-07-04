"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const diferenciadores = [
  "Consultoría independiente e imparcial",
  "Ingenieros y gestores certificados",
  "Informes transparentes y en tiempo real",
  "Acompañamiento en todo el ciclo de vida",
  "Amplia experiencia en el sector colombiano",
  "Comprometidos con la sostenibilidad",
];

const highlights = [
  { icon: Award,  label: "Calidad Certificada" },
  { icon: Users,  label: "Equipo Multidisciplinario" },
  { icon: Target, label: "Resultados Medibles" },
];

const AboutSection = () => {
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
    <section id="nosotros" className="py-24 bg-off-white" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            {/* Main card */}
            <div className="relative bg-navy rounded-2xl p-10 overflow-hidden">
              {/* Background GC watermark */}
              <div className="absolute -right-6 -top-6 font-display text-[120px] font-extrabold text-white/5 select-none leading-none">
                GC
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-brand/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-brand" />
                  <span className="font-body text-blue-brand text-xs font-semibold tracking-wide">Bogotá, Colombia</span>
                </div>
                <h3 className="font-display text-white text-2xl font-extrabold mb-3">
                  Grupo Contécnica
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed mb-8">
                  Fundada para transformar la manera en que se gestionan los proyectos de construcción en Colombia, combinando rigor técnico con un enfoque estratégico.
                </p>
                <div className="flex gap-6">
                  {highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <div key={h.label} className="flex flex-col items-center gap-2 text-center">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <Icon size={18} className="text-blue-brand" />
                        </div>
                        <span className="font-body text-white/70 text-xs leading-tight">{h.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Year badge */}
              <div className="absolute bottom-6 right-6 bg-blue-brand rounded-xl px-4 py-3 text-center">
                <div className="font-display text-2xl font-extrabold text-white leading-none">10+</div>
                <div className="font-body text-white/80 text-xs font-medium">Años</div>
              </div>
            </div>

            {/* Quote card */}
            <div className="mt-5 bg-white rounded-xl p-5 border border-border shadow-card">
              <p className="font-body text-foreground text-sm leading-relaxed italic mb-3">
                &ldquo;Somos una empresa joven y apasionada con el enfoque claro de brindar soluciones estratégicas a nuestros clientes.&rdquo;
              </p>
              <span className="font-body text-blue-brand text-xs font-semibold">— Gerencia General, Grupo Contécnica</span>
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <span className="section-badge mb-4">Quiénes somos</span>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-extrabold mt-3 mb-5">
              Su socio estratégico en construcción
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-3">
              Grupo Contécnica es una firma especializada en Gerencia e Interventoría de Proyectos de construcción. Nuestro equipo multidisciplinario acompaña a clientes públicos y privados en cada etapa.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Combinamos rigor técnico con un enfoque estratégico para entregar proyectos a tiempo, dentro del presupuesto y con los más altos estándares de calidad.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {diferenciadores.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-border shadow-sm transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 70 + 300}ms` }}
                >
                  <CheckCircle2 size={15} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
