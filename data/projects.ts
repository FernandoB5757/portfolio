import type { Project } from '~/types/project'


export const projects: Project[] = [
  {
    id: 'mimo',
    image: {
      src: '/images/projects/mimo.png',
      alt: 'landing page mimo',
      width: 1200,
      height: 630
    },
    url: 'https://www.hondamotoscomoto.mx',
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
      ],
    date: {
      start: '2024-04',
      end: '2025-04',
      isCurrent: true
    },
    meta: {
      keywords: ['motorcycles', 'php','laravel', 'honda', 'motos']
    }
  }
] as const