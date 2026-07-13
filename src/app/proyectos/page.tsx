import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Proyectos Ejecutados",
  description:
    "Portafolio de proyectos de construcción ejecutados por Grupo Contécnica: gerencia e interventoría con resultados reales.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Header */}
      <header className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto">
          <span className="section-badge mb-4">Portafolio</span>
          <h1 className="font-display text-white text-4xl md:text-5xl font-extrabold mt-4">
            Proyectos Ejecutados
          </h1>
          <p className="font-body text-white/70 max-w-xl mt-4 leading-relaxed">
            Una muestra del trabajo donde nuestra gerencia e interventoría marcó la diferencia.
            Haz clic sobre cualquier imagen para verla en detalle.
          </p>
        </div>
      </header>

      <ProjectsGallery />
      <FooterSection />
    </main>
  );
}
