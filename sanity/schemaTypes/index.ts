import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { releasesType } from "./releasesType";
import { aboutType } from "./aboutType";
import { vidoesType } from "./vidoesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, releasesType, aboutType, vidoesType],
};
