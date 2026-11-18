# V18

- `spec.json` contains reusable templates.
- `instructions.json` contains build instructions and the `options.table` instruction map.
- `definitions.json` selects the base template, build instructions, and (for `table.simple`) the option collection name.
- `tags.json` and `tags.schema.json` describe supported tags.

Option execution is driven by these JSON files; the runner does not contain table-feature-specific branches.
