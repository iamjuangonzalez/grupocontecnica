// Datos del sitio y del negocio. Fuente única para metadata, JSON-LD y sitemap.
// ponytail: dominio asumido; cambiar SITE_URL cuando se confirme el definitivo.
export const SITE_URL = "https://www.gcontecnica.com";

export const site = {
	name: "Grupo Contécnica",
	shortName: "Contécnica",
	url: SITE_URL,
	description:
		"Empresa especializada en Gerencia e Interventoría de Proyectos de construcción en Colombia. Soluciones estratégicas, resultados reales.",
	email: "gerencia@gcontecnica.com",
	telephone: "+573165699584",
	whatsapp: "+573165699584",
	address: {
		street: "Calle 174b No 55c 10",
		city: "Bogotá",
		region: "Bogotá D.C.",
		country: "CO",
	},
	areaServed: "Colombia",
} as const;
