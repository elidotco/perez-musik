import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { releasesType } from "./releasesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, releasesType],
};
