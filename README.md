# Manuela Navarro · Portfolio

Personal portfolio of Manuela Navarro, digital product, brand and graphic designer based in Barcelona. Built with [Astro](https://astro.build).

## Run it locally

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/pages/index.astro` | The homepage and its section layout |
| `src/components/` | Header (with the Barcelona clock), intro, section wrapper, project row |
| `src/content/projects/` | One folder per project: `index.md` with its details and description, plus its images |
| `src/pages/projects/[slug].astro` | The project page template |
| `src/data/profile.ts` | Services, experience, skills, education and contact details |
| `src/styles/global.css` | Design tokens (colours, type scale, grid) taken from the Figma Home frame |
| `src/assets/` | Logo |

## Adding a project

1. Copy one of the folders in `src/content/projects/` and rename it. The folder name becomes the page address, e.g. `src/content/projects/ginger/` is `/projects/ginger/`.
2. Put the cover and the project images in that folder.
3. Fill in `index.md`: `title`, `order` (position in the homepage list), up to 3 `badges`, `start` and `end` years (`end: current` for ongoing work, or leave it out for one year), a one-sentence `summary`, the `cover`, an optional `link` to the live site, and at least 5 items in `media`. Write the description below the `---` line.

```yaml
media:
  - image: ./01.png
    alt: What the image shows
  - video: /projects/ginger/onboarding.mp4 # video files go in public/projects/<folder>/
    poster: ./onboarding-poster.png # optional
    alt: What the video shows
```

The build stops with an error if a project has more than 3 badges or fewer than 5 images or videos. While a project is still missing its images, set `draft: true`: it stays in the homepage list, and its page exists for review but is not linked or indexed by search engines.

## Design source

The homepage follows the Figma "Home" frame (Portfolio file, node `1881-21381`): Bricolage Grotesque, a 45 px background grid, and outlined buttons. The projects section follows the large one-project-per-row layout Manuela chose.
