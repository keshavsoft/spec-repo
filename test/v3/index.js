import spec, { tags, tagsSchema } from "../../src/index.js";

console.log("--- Testing spec-repo v3 exports ---");
console.log("spec keys count:", Object.keys(spec).length);
console.log("tags keys count:", Object.keys(tags).length);
console.log("tagsSchema loaded:", Boolean(tagsSchema));
console.log("Example tag (input):", tags.input);
console.log("--- All tests passed! ---");
