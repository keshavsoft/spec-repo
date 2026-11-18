# Spec V18

V18 defines the declarative templates, instruction collections, and feature-option mappings used by the instruction runner.

## Ownership

- `spec.json` — reusable JSON templates.
- `instructions.json` — instruction collections that build or extend those templates.
- `definitions.json` — maps public feature switches to instruction collections and selects base templates.
- `tags.json` and `tags.schema.json` — supported tag metadata and its schema.
- `OPTIONS.md` — public nested-options contract and execution model.

## Shared table options

Table variants use `optionsRef: "tableOptions"` to share the mapping declared once in `definitions.json` under `_optionSets`. A switch can reference one instruction collection or an array of references. The runner resolves and executes these references; it does not contain feature-specific names.

## Change guidance

When adding a UI option, add its boolean switch to the caller contract, map it in `_optionSets.tableOptions` (or a new option set), and add its instruction collection to `instructions.json`. Add or update templates in `spec.json` as needed. Keep rendering behavior in the specification rather than adding feature-specific branches to the runner.
