import { query, paths } from "jsonpathly";
import { spec } from "../../../src/v17/index.js";

// console.log("spec: : ", spec?.tableSimple);

const findTable = query(spec?.tableSimple, `$.children[?@.tagName == "table"]`);

// console.log("findTable: : ", findTable);

const newElement = spec?.tableSearchBar;

const matchedPaths = paths(spec?.tableSimple, '$..[?@.tagName == "table"]');

if (matchedPaths.length > 0) {
    // 2. Parse the bracket segments (e.g., ["children", "0"])
    const segments = [...matchedPaths[0].matchAll(/\[(?:'([^']*)'|(\d+))\]/g)].map(
        (m) => (m[1] !== undefined ? m[1] : Number(m[2]))
    );

    // 3. Separate the target index from the parent array path
    const tableIndex = segments.pop();
    const parentArray = segments.reduce((obj, key) => obj[key], spec?.tableSimple);

    // 4. Insert the new element right before the table
    if (Array.isArray(parentArray) && typeof tableIndex === "number") {
        parentArray.splice(tableIndex, 0, newElement);
    };
};

console.log("result: : ", spec?.tableSimple);
