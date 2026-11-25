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

export type Publication = z.infer<typeof publication>;

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
};
