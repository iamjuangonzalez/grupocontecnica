import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
	return (
		<main className="min-h-screen">
			<TopBar />
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<StatsSection />
			<AboutSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ContactSection />
			<FooterSection />
		</main>
	);
}
