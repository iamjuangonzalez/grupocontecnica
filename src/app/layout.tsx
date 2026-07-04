import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, SITE_URL } from "@/lib/site";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Grupo Contécnica – Gerencia e Interventoría de Proyectos",
		template: "%s | Grupo Contécnica",
	},
	description: site.description,
	keywords: [
		"gerencia de proyectos",
		"interventoría",
		"interventoría de obra",
		"construcción",
		"Colombia",
		"Bogotá",
	],
	authors: [{ name: site.name }],
	creator: site.name,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		locale: "es_CO",
		url: SITE_URL,
		siteName: site.name,
		title: "Grupo Contécnica – Gerencia e Interventoría de Proyectos",
		description: site.description,
		images: [{ url: "/hero-construction.jpg", width: 1200, height: 630, alt: site.name }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Grupo Contécnica – Gerencia e Interventoría de Proyectos",
		description: site.description,
		images: ["/hero-construction.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	icons: { icon: "/favicon.ico" },
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: site.name,
	description: site.description,
	url: SITE_URL,
	email: site.email,
	telephone: site.telephone,
	image: `${SITE_URL}/hero-construction.jpg`,
	address: {
		"@type": "PostalAddress",
		streetAddress: site.address.street,
		addressLocality: site.address.city,
		addressRegion: site.address.region,
		addressCountry: site.address.country,
	},
	areaServed: site.areaServed,
	knowsAbout: ["Gerencia de proyectos", "Interventoría de obra", "Construcción"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`${inter.variable} ${plusJakartaSans.variable}`}>
			<body>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
