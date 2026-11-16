import spec from "./spec.json" with { type: "json" };
import tags from "./tags.json" with { type: "json" };
import tagsSchema from "./tags.schema.json" with { type: "json" };
import definitions from "./definitions.json" with { type: "json" };
import table from "./table.json" with { type: "json" };
import form from "./form.json" with { type: "json" };
import select from "./select.json" with { type: "json" };
import dataList from "./dataList.json" with { type: "json" };
import registerGlobal from "./registerGlobal/index.js";

const instructions = {
    ...table,
    ...form,
    ...select,
    ...dataList
};

export { spec, tags, tagsSchema, definitions, table, form, select, dataList, instructions };

export default spec;

registerGlobal({ spec, tags, tagsSchema, definitions, table, form, select, dataList, instructions });
