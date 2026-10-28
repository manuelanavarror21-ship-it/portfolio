import type { ImageMetadata } from 'astro';
import rss from '../assets/projects/rss.png';
import evins from '../assets/projects/evins.png';
import ginger from '../assets/projects/ginger.png';
import gamestry from '../assets/projects/gamestry.png';
import lesclusivita from '../assets/projects/lesclusivita.png';

export interface Project {
  title: string;
  tags: string[];
  period: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
}

// Content confirmed by Manuela on 28 Oct 2026. Cover images are Manuela's 2560 × 1440 exports.
export const projects: Project[] = [
  {
    title: 'RSS.com',
    tags: ['Product design'],
    period: '2023 → Current',
    summary:
      'An intuitive podcast hosting platform designed to empower creators with seamless tools for sharing their stories with the world.',
    image: rss,
    imageAlt: 'RSS.com logo over the podcast dashboard, the public website and the mobile app, with the design system in the background',
  },
  {
    title: 'Evins',
    tags: ['Product design'],
    period: '2026 → Current',
    summary:
      'Winery operations app for harvest planning, grape intake and cellar production, taken from wireframes to high fidelity.',
    image: evins,
    imageAlt: 'Evins logo over the harvest planning screens, a tablet view and hand-drawn process notes',
  },
  {
    title: 'Ginger',
    tags: ['Product design'],
    period: '2026 → Current',
    summary:
      'Running-training app with plans that adapt to the menstrual cycle. Started as product manager, now designing new features.',
    image: ginger,
    imageAlt: 'Ginger logo over the training plan, audio message, effort rating and plan completed screens',
  },
  {
    title: 'Gamestry',
    tags: ['Branding', 'Product design'],
    period: '2019 → 2022',
    summary: 'Structure and design of a video platform based on gaming content.',
    image: gamestry,
    imageAlt: 'Gamestry owl logo over the video platform home page, a wireframe and the design system',
  },
  {
    title: 'L’Esclusività',
    tags: ['Branding', 'Web design'],
    period: '2025',
    summary:
      'A reimagined brand experience that blends timeless elegance with modern design, offering a sophisticated digital presence for a legacy brand.',
    image: lesclusivita,
    imageAlt: 'L’Esclusività wordmark over the website, business cards, brand pattern and event photography',
  },
];
