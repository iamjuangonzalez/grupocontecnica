# Grupo Contécnica

Landing corporativa de **Grupo Contécnica** (Gerencia e Interventoría de proyectos de construcción, Colombia), desplegada en Cloudflare Workers vía OpenNext.

## Stack

| Pieza | Versión / herramienta |
|-------|-----------------------|
| Framework | Next.js 16 (App Router) |
| React | 19 |
| Estilos | Tailwind CSS **v4** (CSS-first, sin `tailwind.config`) |
| Iconos | `lucide-react` |
| Deploy | Cloudflare Workers vía `@opennextjs/cloudflare` |
| CLI | Wrangler |

> El origen del diseño (`../blueprint-beautiful-landing`) usaba Next 15 / React 18 / Tailwind **v3**. Esto ya se migró; las diferencias de versión importan si se copian archivos nuevos desde allá.

## Comandos

```bash
npm run dev        # Next dev (localhost:3000)
npm run preview    # build OpenNext + runtime de Workers local (probar antes de deploy)
npm run deploy     # build + deploy a Cloudflare
npm run cf-typegen # regenera cloudflare-env.d.ts tras cambiar bindings en wrangler.jsonc
```

Usar `npm run preview` (no solo `dev`) antes de desplegar: el runtime de Workers difiere del de Node y ahí salen los problemas.

## Estructura

```
src/app/
  layout.tsx     # fuentes (Inter + Plus Jakarta), metadata SEO, JSON-LD, <html lang="es">
  page.tsx       # composición de secciones de la landing
  globals.css    # design system completo (tokens @theme, utilidades, animaciones)
  sitemap.ts     # sitemap dinámico (/sitemap.xml)
  robots.ts      # robots dinámico (/robots.txt)
src/components/  # TopBar, Navbar + secciones (Hero, Services, Stats, About, Projects, Testimonials, Contact, Footer)
src/lib/site.ts  # datos del sitio y del negocio (NAP) — fuente única
public/          # hero-construction.jpg, favicon
```

## SEO

Este sitio prioriza SEO. Lo que ya está montado:

- **Metadata completa** en `layout.tsx`: `title` con template, description, keywords, `metadataBase`, canonical, OpenGraph + Twitter card (usan `hero-construction.jpg`), directivas de `robots`.
- **JSON-LD** `ProfessionalService` con NAP (nombre, dirección, teléfono, email, área de servicio) inyectado en el `<body>`.
- **`sitemap.xml` y `robots.txt`** generados por Next (`sitemap.ts` / `robots.ts`). No poner un `robots.txt` estático en `public/` — sombrearía al dinámico.
- **`lang="es"`**, HTML semántico (`<main>`, `<section>` con `id`), jerarquía de headings.
- Datos de negocio centralizados en `src/lib/site.ts` — editar ahí, no duplicar.

> **`SITE_URL` en `src/lib/site.ts` es un dominio asumido** (`https://www.gcontecnica.com`). Confirmar y ajustar antes de publicar: alimenta canonical, OpenGraph, sitemap y JSON-LD.

## Design system (`src/app/globals.css`)

Todo el diseño vive en `globals.css` bajo Tailwind v4. Reglas:

- **Tokens de color** en `@theme` como `--color-navy`, `--color-blue-brand`, etc. → usar con clases `bg-navy`, `text-blue-brand`, `border-border`.
- Colores en **HSL** con variables (`--navy: 215 65% 23%`) para mantener el tema coherente.
- Utilidades de marca (`.gradient-hero`, `.section-badge`, `.blue-line`, `.card-lift`, `.nav-link-underline`) y animaciones de scroll (`.animate-fade-in-up`, `.delay-*`) son CSS plano en `globals.css`.
- Fuentes: `--font-plus-jakarta` (display/headings) y `--font-inter` (body), inyectadas desde `layout.tsx`.

Al añadir un color o gradiente nuevo: definir la variable HSL en `:root`, exponerla en `@theme` si necesita clase utilitaria, y no crear un `tailwind.config`.

## Componentes

- Todas las secciones son **client components** (`"use client"`) porque usan `IntersectionObserver` para animaciones de scroll-reveal.
- Solo dependen de `lucide-react` (iconos) y `next/image`. Sin librería de UI, sin state manager, sin data fetching.
- El formulario de contacto (`ContactSection`) es **solo estado local** — no envía nada aún. Conectar a un endpoint es trabajo pendiente (ver abajo).

## Convenciones

- Textos en **español**. `<html lang="es">`.
- Imágenes vía `next/image` (optimización activada en Workers con el binding `IMAGES`).
- No agregar dependencias para lo que resuelven unas líneas de CSS o JS. El origen traía ~55 componentes shadcn y ~30 paquetes que **no** se usaban en la landing; no reintroducirlos sin necesidad real.

## Pendientes / no implementado

- **Formulario de contacto**: hoy solo hace `setEnviado(true)`. Falta backend (email/CRM). Opción natural en este stack: Cloudflare Email o un Worker route + binding.
- **Datos de secciones** (servicios, proyectos, testimonios) están hardcodeados en cada componente.
