export type Lang = "en" | "es";
export const DEFAULT_LANG: Lang = "en";

export const ui = {
  en: {
    "nav.works": "Works",
    "nav.research": "Research",
    "nav.studio": "Studio",
    "nav.about": "About",
    "nav.bio": "Bio",
    "nav.contact": "Contact",
    "hero.headline": "Artist · Composer · Academic Researcher",
    "hero.tagline": "Art at the intersection of science, technology and living systems.",
    "hero.sub": "Sound, image, bio-art, AI, robotics, sculpture, performance.",
    "works.filter.all": "All",
    "works.filter.cosmos": "Cosmos",
    "works.filter.bioart": "Bio-art",
    "works.filter.sculpture": "Sculpture",
    "works.filter.opera": "Opera",
    "works.filter.performance": "Performance",
    "works.filter.immersive": "Immersive",
    "footer.rights": "All rights reserved.",
    "theme.toggle": "Toggle theme",
    "lang.toggle": "ES",
  },
  es: {
    "nav.works": "Obras",
    "nav.research": "Investigación",
    "nav.studio": "Studio",
    "nav.about": "Sobre mí",
    "nav.bio": "Bio",
    "nav.contact": "Contacto",
    "hero.headline": "Artista · Compositor · Investigador Académico",
    "hero.tagline": "Arte en la intersección de ciencia, tecnología y sistemas vivos.",
    "hero.sub": "Sonido, imagen, bio-art, IA, robótica, escultura, performance.",
    "works.filter.all": "Todas",
    "works.filter.cosmos": "Cosmos",
    "works.filter.bioart": "Bio-art",
    "works.filter.sculpture": "Escultura",
    "works.filter.opera": "Ópera",
    "works.filter.performance": "Performance",
    "works.filter.immersive": "Inmersivo",
    "footer.rights": "Todos los derechos reservados.",
    "theme.toggle": "Cambiar tema",
    "lang.toggle": "EN",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof DEFAULT_LANG]): string {
    return ui[lang][key] ?? ui[DEFAULT_LANG][key];
  };
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  return `/es${path}`;
}
