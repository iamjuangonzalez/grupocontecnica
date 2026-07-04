"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-construction.jpg"
          alt="Edificios modernos - Grupo Contécnica"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto pt-36 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 opacity-0 animate-fade-in-up delay-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-brand inline-block" />
            <span className="font-body text-white/90 text-xs font-medium tracking-wide">
              Gerencia e Interventoría de Proyectos
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 opacity-0 animate-fade-in-up delay-200">
            ¡Dar soluciones<br />
            <span className="text-blue-brand">es lo que</span><br />
            hacemos!
          </h1>

          {/* Subtext */}
          <p className="font-body text-white/75 text-base md:text-lg max-w-lg mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-300">
            Somos una empresa joven y apasionada con el enfoque claro de brindar soluciones estratégicas a nuestros clientes en proyectos de construcción.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollTo("contacto")}
              className="flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 rounded-lg bg-blue-brand text-white hover:bg-blue-brand/90 transition-all duration-200 shadow-navy"
            >
              Solicitar Consulta <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("servicios")}
              className="flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 rounded-lg bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Ver Servicios
            </button>
            <a
              href="tel:+573165699584"
              className="flex items-center gap-2 font-body text-sm font-medium px-6 py-3 rounded-lg text-white/75 hover:text-white transition-colors"
            >
              <Phone size={14} /> +57 (316) 569-9584
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
};

export default HeroSection;
