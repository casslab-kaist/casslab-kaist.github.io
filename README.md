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
| `src/data/publications.ts` | The publication list, grouped into sections |
| `src/data/site.ts` | Most other content: navigation, lab intro, FAQ, research themes, projects, PI profile, members, teaching |
| `src/pages/` | One file per page. The file name is the URL: `members.astro` is `/members/` |
| `src/layouts/Layout.astro` | The `<head>`, header, and footer shared by every page |
| `src/components/` | Pieces of markup used by the pages |
| `src/styles/global.css` | All styles |
| `public/` | Images and other files served as they are: `public/hub.svg` is `/hub.svg` |

## Updating content

Most updates only touch the two data files in `src/data/`. Copy an existing entry, paste it next to the original, and change its fields. Entries appear on the page in the order they are listed.

- **Publication**: add an entry to the `items` list of the right section in `src/data/publications.ts`. `linkLabel` and `url` are optional; set both to show a link.
- **Member**: add an entry to `phdStudents`, `msStudents`, `researchAssistants`, or `alumni` in `src/data/site.ts`. The comments on `LabMember` in that file explain each field.

Some text is still written directly in the page files, for example the longer biography on `src/pages/pi.astro`.

Run `npm run build` before you push. It stops with an error if a data file has a syntax mistake, such as a missing comma or quotation mark.

## Deployment

Every push to `main` runs `.github/workflows/astro.yml`, which builds the site and publishes it to GitHub Pages.
