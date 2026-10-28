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
| `src/data/projects.ts` | Featured projects: title, tags, years, summary, image |
| `src/data/profile.ts` | Services, experience, skills, education and contact details |
| `src/styles/global.css` | Design tokens (colours, type scale, grid) taken from the Figma Home frame |
| `src/assets/` | Logo and project images |

To change a project's text or order, edit `src/data/projects.ts`. To swap an image, replace the file in `src/assets/projects/` with the same name.

## Design source

The homepage follows the Figma "Home" frame (Portfolio file, node `1881-21381`): Bricolage Grotesque, a 45 px background grid, and outlined buttons. The projects section follows the large one-project-per-row layout Manuela chose.
