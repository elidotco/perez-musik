import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { releasesType } from "./releasesType";
import { aboutType } from "./aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, releasesType, aboutType],
};
