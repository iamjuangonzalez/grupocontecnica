"use client";

import { useEffect, useRef, useState } from "react";

const estadisticas = [
  { value: 120, suffix: "+", label: "Proyectos Ejecutados" },
  { value: 10,  suffix: "+", label: "Años de Experiencia" },
  { value: 98,  suffix: "%", label: "Clientes Satisfechos" },
  { value: 500, suffix: "M+", label: "COP Gestionados" },
];

const useCountUp = (target: number, duration: number, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(parseFloat(current.toFixed(0)));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
};

const StatCard = ({ value, suffix, label, active, delay }: {
  value: number; suffix: string; label: string; active: boolean; delay: number;
}) => {
  const count = useCountUp(value, 1400, active);
  return (
    <div
      className={`text-center transition-all duration-700 ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-4xl md:text-5xl font-extrabold text-white mb-1">
        {Math.round(count)}
        <span className="text-blue-brand">{suffix}</span>
      </div>
      <p className="font-body text-white/55 text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-navy" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {estadisticas.map((stat, i) => (
            <StatCard key={stat.label} {...stat} active={visible} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
