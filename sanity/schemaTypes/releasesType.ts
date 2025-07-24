import { defineField, defineType } from "sanity";

export const releasesType = defineType({
  name: "releases",
  title: "Releases",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name", // auto-generates from the 'name' field
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "spotify",
      title: "Spotify Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "text",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
  ],
});
