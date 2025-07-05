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
        'redis',
        'meilisearch'
      ],
    date: {
      start: '2024-04',
      end: '2025-04',
      isCurrent: true
    },
    meta: {
      keywords: ['motorcycles', 'php','laravel', 'honda', 'motos']
    }
  },

  {
    id: 'ekar',
    image: {
      src: '/images/projects/ekar.png',
      alt: 'landing page mimo',
      width: 1200,
      height: 630
    },
    url: 'https://www.ekardegas.mx',
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
        'filament'
      ],
    date: {
      start: '2024-04',
      end: '2025-04',
      isCurrent: true
    },
    meta: {
      keywords: ['ecommerce', 'php','laravel','mercadopago','sap','xml']
    }
  },

  {
    id: 'tubin',
    image: {
      src: '/images/projects/tubin.png',
      alt: 'landing page mimo',
      width: 1200,
      height: 630
    },
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
        'filament'
      ],
    date: {
      start: '2024-08',
      isCurrent: true
    },
    meta: {
      keywords: ['ecommerce', 'php','laravel','mercadopago','sap','xml']
    }
  },

  {
    id: 'solarudg',
    image: {
      src: '/images/projects/tubin.png',
      alt: 'landing page mimo',
      width: 1200,
      height: 630
    },
    technologies: [
        'laravel',
        'php',
        'javascript',
        'livewire',
        'alpinejs',
        'tailwindcss'
      ],
    date: {
      start: '2024-08',
      isCurrent: true
    },
    meta: {
      keywords: ['ecommerce', 'php','laravel','mercadopago','sap','xml']
    }
  },
] as const