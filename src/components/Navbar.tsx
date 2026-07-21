"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio",    id: "inicio" },
    { label: "Servicios", id: "servicios" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Nosotros",  id: "nosotros" },
    { label: "Contacto",  id: "contacto" },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    // ponytail: si la sección no está en esta página (ej. /proyectos), navega al landing con hash.
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `/#${id}`;
  };

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled
        ? "top-0 bg-navy shadow-navy py-0"
        : "top-0 md:top-[33px] bg-white shadow-card border-b border-border py-0"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("inicio")} className="flex items-center">
          <Image
            src={isScrolled ? "/logo_w.png" : "/logo.jpeg"}
            alt="Grupo Contécnica"
            width={700}
            height={399}
            priority
            className="h-12 w-auto"
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`font-body text-sm font-medium px-3 py-2 rounded-md transition-colors nav-link-underline ${
                  isScrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-foreground hover:text-navy hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={() => scrollTo("contacto")}
              className={`font-body text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? "bg-blue-brand text-white hover:bg-blue-brand/90 shadow-navy"
                  : "bg-navy text-white hover:bg-navy-mid shadow-navy"
              }`}
            >
              Cotizar
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            isScrolled ? "text-white hover:bg-white/10" : "text-navy hover:bg-secondary"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-deep">
          <ul className="container mx-auto py-3 flex flex-col">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-body text-foreground hover:text-navy hover:bg-secondary text-sm font-medium w-full text-left px-3 py-2.5 rounded-md"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 px-3 pb-2">
              <button
                onClick={() => scrollTo("contacto")}
                className="font-body text-sm font-semibold px-5 py-2.5 bg-navy text-white w-full rounded-lg hover:bg-navy-mid transition-colors"
              >
                Solicitar Cotización
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
