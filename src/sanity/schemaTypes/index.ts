import { type SchemaTypeDefinition } from "sanity";
// import { students } from "../students";
// import { teacher } from "../teacher";
// import { subject } from "../subject";
import { test } from "../test";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [students, teacher, subject, test],
};
