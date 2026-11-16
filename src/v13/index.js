import spec from "./spec.json" with { type: "json" };
import tags from "./tags.json" with { type: "json" };
import tagsSchema from "./tags.schema.json" with { type: "json" };
import definitions from "./definitions.json" with { type: "json" };
import registerGlobal from "./registerGlobal/index.js";

export { spec, tags, tagsSchema, definitions };

export default spec;

registerGlobal({ spec, tags, tagsSchema, definitions });