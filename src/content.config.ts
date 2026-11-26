// Schemas for the YAML files in src/data/. Astro checks every file against
// its schema when the site builds, and the build stops with an error that
// names the file and field if something is missing, misspelled, or the wrong
// kind of value. EDITING.md explains how to edit each file.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Non-empty text. A bare number such as `year: 2026` is accepted as text.
const text = z.preprocess(
  (value) => (typeof value === "number" ? String(value) : value),
  z.string({ error: (issue) => (issue.input === undefined ? "Required" : "Must be text") })
    .trim()
    .min(1, "Must not be empty"),
);

// A list of items. The custom messages replace Astro's harder-to-read defaults.
const list = <T extends z.ZodType>(item: T) =>
  z.array(item, { error: (issue) => (issue.input === undefined ? "Required" : "Must be a list") });

const order = z.number({ error: (issue) => (issue.input === undefined ? "Required" : "Must be a number") });

const webAddress = z.url({ protocol: /^https?$/, error: "Must be a full web address starting with https:// or http://" });

// An image in the public/ folder, written as its path from the site root:
// public/pi-gallery-1.png is "/pi-gallery-1.png".
const image = text.refine((path) => path.startsWith("/"), 'Must start with "/", for example "/pi-portrait.png"');

const link = z.strictObject({
  label: text,
  url: webAddress,
});

const publication = z.strictObject({
  type: text,
  languages: list(text).min(1, "List at least one language"),
  title: text,
  koreanTitle: text.optional(),
  details: list(text).min(1, "Add at least one line"),
  links: list(link).default([]),
});

const member = z.strictObject({
  name: text,
  nativeName: text.optional(),
  email: z.email("Must be an email address").optional(),
  program: text,
  since: text.optional(),
  until: text.optional(),
  detail: text.optional(),
});

const timelineItem = z.strictObject({
  date: text,
  title: text,
  detail: text,
});

export type Publication = z.infer<typeof publication>;
export type Member = z.infer<typeof member>;

export const collections = {
  // One file per section of the Publications page. The file name is the
  // section's anchor: journal-articles.yaml is /publications/#journal-articles.
  publications: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "src/data/publications" }),
    schema: z.strictObject({
      title: text,
      order,
      items: list(publication),
    }),
  }),

  // One file per section of the Members page, named like the publications.
  members: defineCollection({
    loader: glob({ pattern: "*.yaml", base: "src/data/members" }),
    schema: z.strictObject({
      title: text,
      order,
      members: list(member),
    }),
  }),

  // Current Projects on the Research page.
  projects: defineCollection({
    loader: glob({ pattern: "projects.yaml", base: "src/data" }),
    schema: z.strictObject({
      projects: list(
        z.strictObject({
          title: text,
          fundingAgency: text,
          duration: text,
        }),
      ),
    }),
  }),

  // Everything on the PI page, plus the PI summary on the home page.
  pi: defineCollection({
    loader: glob({ pattern: "pi.yaml", base: "src/data" }),
    schema: z.strictObject({
      name: text,
      title: text,
      appointment: text,
      portrait: image,
      homePortrait: image,
      homeIntro: list(text).min(1, "Add at least one paragraph"),
      bio: list(text).min(1, "Add at least one paragraph"),
      longBio: list(text).min(1, "Add at least one paragraph"),
      links: list(
        link.extend({
          icon: z.enum(["building", "graduation-cap", "id-card"], {
            error: "Must be one of: building, graduation-cap, id-card",
          }),
        }),
      ),
      emails: list(z.email("Must be an email address")),
      appointments: list(timelineItem),
      education: list(timelineItem),
      teaching: list(
        z.strictObject({
          institution: text,
          courses: list(
            z.strictObject({
              title: text,
              koreanTitle: text.optional(),
              offerings: list(
                z.strictObject({
                  term: text,
                  role: text,
                  evaluation: text.optional(),
                  award: text.optional(),
                }),
              ),
            }),
          ),
        }),
      ),
      awards: list(
        z.strictObject({
          title: text,
          organization: text,
          year: text,
        }),
      ),
      gallery: list(
        z.strictObject({
          image,
          alt: text,
        }),
      ),
    }),
  }),
};
