"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", tipo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Hola, soy ${form.nombre}.`,
      `Empresa: ${form.empresa || "—"}`,
      `Tipo de proyecto: ${form.tipo || "—"}`,
      `Correo: ${form.email}`,
      "",
      form.mensaje,
    ].join("\n");
    const num = site.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setEnviado(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const info = [
    { icon: MapPin,        label: "Dirección",  value: "Calle 174b No 55c 10, Bogotá" },
    { icon: Mail,          label: "Correo",     value: "gerencia@gcontecnica.com",  href: "mailto:gerencia@gcontecnica.com" },
    { icon: Phone,         label: "Teléfono",   value: "+57 (316) 569-9584",        href: "tel:+573165699584" },
    { icon: MessageCircle, label: "WhatsApp",   value: "+57 (316) 569-9584",        href: "https://wa.me/573165699584" },
  ];

  return (
    <section id="contacto" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="section-badge mb-3">Contáctenos</span>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-extrabold mt-3 mb-3">
            Hablemos de su proyecto
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto text-base">
            Agendamos una consulta sin costo con uno de nuestros consultores senior en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left info */}
          <div className={`lg:col-span-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-navy rounded-2xl p-8 space-y-5 mb-5">
              {info.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div key={item.label} className={`flex items-start gap-4 transition-all duration-500 ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`} style={{ transitionDelay: `${i * 80 + 200}ms` }}>
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-blue-brand" />
                    </div>
                    <div>
                      <div className="font-body text-white/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="font-body text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href
                  ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" key={item.label} className="block hover:opacity-80 transition-opacity">{content}</a>
                  : <div key={item.label}>{content}</div>;
              })}
            </div>

            <a
              href="https://wa.me/573165699584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-body text-sm font-semibold py-3 rounded-xl bg-[hsl(142_71%_45%)] text-white hover:bg-[hsl(142_71%_38%)] transition-colors shadow-card"
            >
              <MessageCircle size={16} /> Chatear por WhatsApp
            </a>
          </div>

          {/* Right form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {enviado ? (
              <div className="bg-off-white rounded-2xl border border-border p-12 flex flex-col items-center justify-center text-center min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-blue-pale flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-blue-brand" />
                </div>
                <h3 className="font-display text-navy text-2xl font-extrabold mb-2">¡Mensaje enviado!</h3>
                <p className="font-body text-muted-foreground text-sm max-w-xs">
                  Un consultor se comunicará con usted en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-off-white rounded-2xl border border-border p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "nombre", label: "Nombre Completo", placeholder: "Juan Pérez", type: "text" },
                    { name: "email",  label: "Correo Electrónico", placeholder: "juan@empresa.com", type: "email" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="font-body text-foreground text-xs font-semibold mb-1.5 block">{f.label} *</label>
                      <input
                        id={f.name} name={f.name} type={f.type} value={form[f.name as keyof typeof form]}
                        onChange={handleChange} required placeholder={f.placeholder}
                        className="w-full bg-white border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="empresa" className="font-body text-foreground text-xs font-semibold mb-1.5 block">Empresa</label>
                  <input
                    id="empresa" name="empresa" value={form.empresa} onChange={handleChange}
                    placeholder="Nombre de su empresa"
                    className="w-full bg-white border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="tipo" className="font-body text-foreground text-xs font-semibold mb-1.5 block">Tipo de Proyecto</label>
                  <select
                    id="tipo" name="tipo" value={form.tipo} onChange={handleChange}
                    className="w-full bg-white border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    <option value="">Seleccione el tipo de proyecto...</option>
                    <option value="comercial">Comercial</option>
                    <option value="residencial">Residencial</option>
                    <option value="industrial">Industrial</option>
                    <option value="infraestructura">Infraestructura</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="font-body text-foreground text-xs font-semibold mb-1.5 block">Mensaje *</label>
                  <textarea
                    id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required rows={4}
                    placeholder="Cuéntenos sobre su proyecto y sus necesidades..."
                    className="w-full bg-white border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-body text-sm font-semibold py-3 rounded-xl bg-navy text-white hover:bg-navy-mid shadow-navy transition-all duration-200"
                >
                  Enviar Mensaje <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
