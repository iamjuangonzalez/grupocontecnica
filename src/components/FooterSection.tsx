"use client";

import { ArrowRight, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const FooterSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy">
      <div className="container mx-auto pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-brand flex items-center justify-center font-display font-extrabold text-sm text-white">
                G
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-xs tracking-widest text-white/60 uppercase">Grupo</div>
                <div className="font-display font-extrabold text-sm tracking-wide text-white">Contécnica</div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs mb-5">
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
                    className="font-body text-white/50 text-sm hover:text-white transition-colors"
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
                <span className="font-body text-white/50 text-xs leading-relaxed">
                  Calle 174b No 55c 10<br />Bogotá, Colombia
                </span>
              </li>
              <li>
                <a href="mailto:gerencia@gcontecnica.com" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <Mail size={13} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-xs">gerencia@gcontecnica.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+573165699584" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                  <Phone size={13} className="text-blue-brand flex-shrink-0" />
                  <span className="font-body text-xs">+57 (316) 569-9584</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/573165699584" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
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
