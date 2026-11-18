# V18

V18 contains the declarative definitions used by `json-renderers-run-instructions`.

- `spec.json`: reusable JSON templates.
- `instructions.json`: instruction collections that build or modify templates.
- `definitions.json`: maps renderer choices and option switches to instruction names.
- `tags.json` and `tags.schema.json`: supported tag metadata.

The caller supplies boolean option switches. This package decides which instructions those switches select.
