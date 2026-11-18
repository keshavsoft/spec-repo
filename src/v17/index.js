import definitions from "./definitions.json" with { type: "json" };
import spec from "./spec.json" with { type: "json" };

import tags from "./tags.json" with { type: "json" };
import tagsSchema from "./tags.schema.json" with { type: "json" };
import instructions from "./instructions.json" with { type: "json" };

import registerGlobal from "./registerGlobal/index.js";

export { spec, tags, tagsSchema, instructions, definitions };
export default spec;

registerGlobal({ spec, tags, tagsSchema, instructions, definitions });