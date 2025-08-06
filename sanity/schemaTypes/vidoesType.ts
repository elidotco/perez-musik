import { defineField, defineType } from "sanity";

export const vidoesType = defineType({
  name: "vidoeslink",
  title: "Videos Link",
  type: "document",
  fields: [
    defineField({
      name: "link",
      title: "Embed Link",
      type: "string",
    }),
  ],
});
