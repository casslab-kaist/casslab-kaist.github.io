# Editing the site's content

Publications, members, research projects, and the PI page are stored as YAML files in `src/data/`. To change what the site shows, you edit one of these files. You don't need to open any page or component files.

| What | File |
| :--- | :--- |
| Publications | `src/data/publications/`, one file per section: `books.yaml`, `book-chapters.yaml`, `journal-articles.yaml`, `translations.yaml`, `book-reviews.yaml`, `public-writing.yaml` |
| Members | `src/data/members/`, one file per group: `phd-students.yaml`, `ms-students.yaml`, `research-assistants.yaml`, `alumni.yaml` |
| Current projects (Research page) | `src/data/projects.yaml` |
| PI page, and the PI summary on the home page | `src/data/pi.yaml` |
| Lab introduction, About page, FAQ, research themes | `src/data/site.ts` (see [Other text](#other-text)) |

## Making a change

1. Edit the file. Copy an existing entry, paste it where the new one should appear, and change its values. Entries appear on the page in the same order as in the file.
2. Preview it with `npm run dev` and open <http://localhost:4321>. The page reloads as you save. (The first time, install Node.js and run `npm install` as the [README](README.md) describes.)
3. Run `npm run build`. If an entry has a mistake, the build stops and tells you where (see [When the build fails](#when-the-build-fails)).
4. Commit, push to a branch, and open a pull request.

You can also edit a file on github.com with the pencil icon and choose "Create a new branch" when you commit. If a mistake reaches `main`, the deploy fails and the live site keeps its previous version until the mistake is fixed.

## YAML basics

- Each line is `field: value`. Put text values in double quotes: `title: "Maoist Pigs: Swine, Communes, and the State"`. Quotes keep characters like `:` and `#` from being misread.
- A list is a set of lines that start with `-`. Short lists can be written on one line: `languages: ["Korean", "English"]`.
- Indentation matters. Use spaces, never tabs, and line up each field with the fields around it. Copying an existing entry is the easiest way to get it right.
- To use a double quote inside a value, write `\"`. Curly quotes (“ ” ‘ ’) need nothing special.
- Lines starting with `#` are comments and don't appear on the site.
- Type or paste Korean text exactly as it should appear. It needs no special handling.

## Publications

Each file in `src/data/publications/` is one section of the Publications page. The file name is the section's link: `journal-articles.yaml` is `/publications/#journal-articles`. Each file has a `title` (the section heading and sidebar label), an `order` (1 is the first section), and a list of `items`.

| Field | Required | What it is |
| :--- | :--- | :--- |
| `type` | yes | The tag in the top left of the card, such as `"Articles"`, `"Book"`, `"Op-ed"`. |
| `languages` | yes | One or more badges in the top right: `["English"]`, `["Korean"]`, `["Korean", "English"]`. A badge that contains "Korean" gets the Korean color. |
| `title` | yes | The title. For a work with only a Korean title, put the Korean title here. |
| `koreanTitle` | no | The Korean title of a work that also has an English one. It is shown after the English title in square brackets. |
| `details` | yes | One or more lines under the title: authors, venue, publisher, date. Each list item is a separate line. |
| `links` | no | One or more buttons. Each has a `label` and a full `url` starting with `https://` or `http://`. |

Copy the example closest to what you're adding into the right file, then replace every value.

**Journal article** (in `journal-articles.yaml`):

```yaml
  - type: "Articles"
    languages: ["English"]
    title: "Article Title: Subtitle"
    details:
      - "Jongsik Christian Yi. Journal Name, Vol. 1, No. 1 (Month Year): 1–20."
    links:
      - label: "View Article"
        url: "https://doi.org/..."
```

**Korean article with an English title**:

```yaml
  - type: "Articles"
    languages: ["Korean"]
    title: "English Title of the Article"
    koreanTitle: "한국어 논문 제목"
    details:
      - "Jongsik Christian Yi. Journal Name, Vol. 1, No. 1 (Month Year): 1–20."
    links:
      - label: "View Article"
        url: "https://www.kci.go.kr/..."
```

**Book** (in `books.yaml`). Leave out `links` until there is a page to link to:

```yaml
  - type: "Book"
    languages: ["Korean"]
    title: "English Title of the Book"
    koreanTitle: "한국어 책 제목"
    details:
      - "Jongsik Christian Yi. Publisher, Year."
    links:
      - label: "View Publisher Site"
        url: "https://..."
```

**Book chapter** (in `book-chapters.yaml`):

```yaml
  - type: "Book Chapter"
    languages: ["English"]
    title: "Chapter Title"
    details:
      - "In Book Title, eds. Editor One and Editor Two. Publisher."
      - "Jongsik Christian Yi (forthcoming)."
    links:
      - label: "View Publisher Site"
        url: "https://..."
```

**Translation** (in `translations.yaml`):

```yaml
  - type: "Translation"
    languages: ["Korean Edition"]
    title: "Original English Title"
    koreanTitle: "한국어판 제목"
    details:
      - "Original Work: Author Name. Publisher, Year."
      - "Translated by: Jongsik Christian Yi. Publisher, Year."
    links:
      - label: "View Publisher Site"
        url: "https://..."
```

**Book review** (in `book-reviews.yaml`):

```yaml
  - type: "Review"
    languages: ["English"]
    title: "Review of Book Title"
    details:
      - "Original Work: Author Name. Publisher, Year."
      - "Reviewed in: Journal Name, Vol. 1, No. 1 (Month Year): 1–3."
    links:
      - label: "View Publisher Site"
        url: "https://..."
```

**Op-ed or public essay** (in `public-writing.yaml`). Use `"Op-ed"` or `"Public Essay"` as the type:

```yaml
  - type: "Op-ed"
    languages: ["Korean"]
    title: "English Title"
    koreanTitle: "한국어 제목"
    details:
      - "Jongsik Christian Yi. Newspaper Name, Month Day, Year."
    links:
      - label: "View Online"
        url: "https://..."
```

**Interview with only a Korean title** (in `public-writing.yaml`):

```yaml
  - type: "Interview"
    languages: ["Korean"]
    title: "한국어 기사 제목"
    details:
      - "Interview with Outlet Name. Month Day, Year."
    links:
      - label: "View Online"
        url: "https://..."
```

**Several languages and several links**:

```yaml
  - type: "Public Essay"
    languages: ["Korean", "English"]
    title: "English Title"
    koreanTitle: "한국어 제목"
    details:
      - "Jongsik Christian Yi. Outlet Name, Month Day, Year."
    links:
      - label: "View Online (Korean)"
        url: "https://..."
      - label: "View Online (English)"
        url: "https://..."
```

To add a new section, create a new file in `src/data/publications/` with a `title`, an `order`, and `items`, following an existing file. The section and its sidebar link appear automatically. Change the other files' `order` values if the new section should go in between.

## Members

Each file in `src/data/members/` is one group on the Members page, with a `title`, an `order`, and a list of `members`.

| Field | Required | What it is |
| :--- | :--- | :--- |
| `name` | yes | Name in English. |
| `nativeName` | no | Name in Korean or another script, shown after the English name. |
| `email` | no | Shown on the page with "(at)" in place of "@". |
| `program` | yes | `"PhD"`, `"MS"`, `"BS"`, and so on. |
| `since` | no | When they joined, such as `"Aug. 2026"`. |
| `until` | no | When they left (alumni). Only shown together with `since`. |
| `detail` | no | Research interests for students, home department for research assistants, current position for alumni. |

```yaml
  - name: "Gildong Hong"
    nativeName: "홍길동"
    email: "gildong@kaist.ac.kr"
    program: "MS"
    since: "Aug. 2027"
    detail: "Research interests"
```

When someone graduates, cut their entry from their current group, paste it into `alumni.yaml`, add `until`, and change `detail` to their current position. While `alumni.yaml` is empty it reads `members: []`. Replace that line with `members:` followed by the entry, as the comment in the file shows.

## Current projects

`src/data/projects.yaml` lists the projects on the Research page:

```yaml
  - title: "Project Title"
    fundingAgency: "National Research Foundation of Korea"
    duration: "2027 - 2030"
```

## PI page

`src/data/pi.yaml` holds everything on the PI page and the PI summary on the home page. Comments in the file say what each part is. The parts that change most often:

A new **course or term** goes under the right institution in `teaching`. `koreanTitle`, `evaluation`, and `award` are optional:

```yaml
      - title: "Course Title"
        koreanTitle: "한국어 강의명"
        offerings:
          - term: "Spring 2027"
            role: "Instructor"
            evaluation: "5.0/5.0"
```

To add a term to an existing course, add another `- term:` block under its `offerings`, newest first.

An **award** goes in `awards`:

```yaml
  - title: "Award Name"
    organization: "Awarding Organization"
    year: "2027"
```

An **appointment** goes in `appointments` and has `date`, `title`, and `detail`. The first appointment in the list is marked as current. **Education** entries have the same fields.

In `longBio`, wrap book and journal titles in `<em>` and `</em>` to show them in italics.

For a **gallery photo**, put the image file in `public/` and add an entry whose `image` is the file's path from there, starting with `/`:

```yaml
  - image: "/pi-gallery-5.png"
    alt: "Short description of the photo"
```

## When the build fails

The build checks every YAML file. If a required field is missing, a field name is misspelled, or a value has the wrong form, the build stops with a message such as:

```
[InvalidContentEntryDataError] publications → journal-articles data does not match collection schema.
  items.0.title: Required
  items.0: Unrecognized key: "titel"
```

This says that in `src/data/publications/journal-articles.yaml`, the first entry has no `title` and has a field called `titel` that isn't allowed. Counting starts at 0, so `items.0` is the first entry, `items.1` the second, and `items.0.links.1.url` is the second link's address in the first entry.

If the file isn't valid YAML, the message gives a line and column instead:

```
[DataCollectionEntryParseError] ../data/publications/journal-articles.yaml failed to parse: bad indentation of a mapping entry
  Location:
    .../src/data/publications/journal-articles.yaml:8:22
```

This points to line 8, column 22. The usual causes are a missing quotation mark or a line indented differently from the lines around it.

## Other text

The lab introduction on the home page, the About page lists and FAQ, and the research themes are in `src/data/site.ts`. This is a TypeScript file rather than YAML: text goes in double quotes and every entry ends with a comma. The build doesn't check these for missing fields, so preview the page after editing them. A few sentences, such as "Joining the Lab" on the About page, are written directly in the page files in `src/pages/`.
