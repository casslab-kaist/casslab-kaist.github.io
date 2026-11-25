# CASS Lab website

Source for the CASS Lab homepage at <https://cass.kaist.ac.kr>. It is a static site built with [Astro](https://docs.astro.build) and published to GitHub Pages.

## Running it locally

You need Node.js 22.12 or later.

```sh
npm install       # once, to install dependencies
npm run dev       # local preview at http://localhost:4321 that reloads as you edit
npm run build     # build the site into dist/
npm run preview   # serve the built dist/ folder
```

## Where things are

| Path | What it holds |
| :--- | :--- |
| `src/data/publications/`, `src/data/members/` | Publications and members as YAML, one file per page section |
| `src/data/pi.yaml`, `src/data/projects.yaml` | The PI page and the Research page's current projects |
| `src/data/site.ts` | Navigation, image paths, lab intro, About page lists and FAQ, research themes |
| `src/content.config.ts` | The schema each YAML file is checked against when the site builds |
| `src/pages/` | One file per page. The file name is the URL: `members.astro` is `/members/` |
| `src/layouts/Layout.astro` | The `<head>`, header, and footer shared by every page |
| `src/components/` | Pieces of markup used by the pages |
| `src/styles/global.css` | All styles |
| `public/` | Images and other files served as they are: `public/hub.svg` is `/hub.svg` |

## Updating content

Publications, members, projects, and the PI page are edited in the YAML files in `src/data/`, without touching any page or component. [EDITING.md](EDITING.md) explains each file and has copy-paste examples for each kind of publication.

Run `npm run build` before you push. It checks every YAML file and stops with an error naming the file and field if an entry is missing a required field, has a misspelled field, or has a value in the wrong form.

## Deployment

Every push to `main` runs `.github/workflows/astro.yml`, which builds the site and publishes it to GitHub Pages.
