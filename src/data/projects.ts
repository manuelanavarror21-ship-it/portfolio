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
  /** "cover" fills the stage edge to edge; "contain" sits the image on a coloured stage. */
  fit: 'cover' | 'contain';
  /** CSS object-position for "cover" images, to keep the important part in frame. */
  position?: string;
  stage: string;
}

// Content confirmed by Manuela on 28 Oct 2026. Images are temporary renders from Figma;
// replace them with full-resolution exports before launch.
export const projects: Project[] = [
  {
    title: 'RSS.com',
    tags: ['Product design'],
    period: '2023 – now',
    summary:
      'An intuitive podcast hosting platform designed to empower creators with seamless tools for sharing their stories with the world.',
    image: rss,
    imageAlt: 'RSS.com illustrated cover with the logo, a telescope and two small robots on a purple planet',
    fit: 'cover',
    stage: '#1f1037',
  },
  {
    title: 'Evins',
    tags: ['Product design'],
    period: '2026 – now',
    summary:
      'Winery operations app for harvest planning, grape intake and cellar production, taken from wireframes to high fidelity.',
    image: evins,
    imageAlt: 'Evins harvest dashboard showing grape intake, litres of wine and cellar occupancy',
    fit: 'contain',
    stage: '#e8eee6',
  },
  {
    title: 'Ginger',
    tags: ['Product design'],
    period: '2026 – now',
    summary:
      'Running-training app with plans that adapt to the menstrual cycle. Started as product manager, now designing new features.',
    image: ginger,
    imageAlt: 'Five Ginger app screens: home, shared marathon link, audio recording, workout summary and effort rating',
    fit: 'contain',
    stage: '#dfeadb',
  },
  {
    title: 'Gamestry',
    tags: ['Branding', 'Product design'],
    period: '2019 – 2022',
    summary: 'Structure and design of a video platform based on gaming content.',
    image: gamestry,
    imageAlt: 'Gamestry logo beside the video platform on a laptop and a phone',
    fit: 'cover',
    position: 'left center',
    stage: '#9b7bf5',
  },
  {
    title: 'L’Esclusività',
    tags: ['Branding', 'Web design'],
    period: '2025',
    summary:
      'A reimagined brand experience that blends timeless elegance with modern design, offering a sophisticated digital presence for a legacy brand.',
    image: lesclusivita,
    imageAlt: 'L’Esclusività brand identity: wordmark, flower symbol, gold pattern and embossed leather',
    fit: 'cover',
    stage: '#004530',
  },
];
