# V18 — Nested, instruction-driven options

## Outside contract

The caller supplies exactly three feature objects. Each nested property is a boolean
switch. The caller does not supply instruction names, templates, JSONPath expressions,
mutation actions, or execution order.

```js
{
    search: {
        showLabel: true,
        showHelper: true,
        showInput: true
    },
    serial: {
        showRootSerial: true,
        showSubSerial: true
    },
    options: {
        showButton: true,
        showEditButton: true,
        showDeleteButton: true
    }
}
```

The serial switch names `showRootSerial` and `showSubSerial` are the current working
interpretation of the root/sub-serial distinction. They can be renamed in the spec
without changing the runner.

## Specification responsibilities

`definitions.json` contains a nested map that mirrors the outside contract. Each
feature switch maps to one instruction key or a composable instruction reference.
The table variants share one mapping through the top-level `_optionSets.tableOptions`
preset; each table definition selects it with `optionsRef`. This keeps the mappings
consistent without repeating the same JSON block in every variant.

The optional `initialize` entry declares a structural preparation instruction for
that feature. It is specification metadata, not a caller-facing option.

`instructions.json` owns the actual instruction collections. `spec.json` owns the
templates. The search toolbar is composed from independent label, helper, and input
slots, so each caller switch can be enabled independently.

Search initialization uses a `skipIf` JSONPath guard. If a search toolbar is already
present, its frame is not inserted again. The individual label/helper/input
instructions also have their own duplicate guards.

## Runner responsibilities

The V10 run-options runner:

1. Iterates over the feature definitions supplied by the spec.
2. Finds the matching incoming feature object.
3. Selects only nested switches whose values are `true`.
4. Runs the declared `initialize` instruction once when at least one switch is on.
5. Resolves each enabled switch to its instruction collection.
6. Filters instructions by destination existence and `skipIf`.
7. Executes the resulting instructions through `json-instruction-single`.

The runner contains no feature-specific branches or feature/switch names. New
features and switches are added by extending the spec mapping and instruction
library; the generic runner does not need to change.

Instruction references can resolve to a single instruction collection, an array of
instruction references, or inline instruction objects. This allows a switch to
compose multiple instruction collections.

## Current switch mapping

| Feature object | Boolean switch | Instruction collection |
|---|---|---|
| `search` | `showLabel` | `searchLabel` |
| `search` | `showHelper` | `searchHelper` |
| `search` | `showInput` | `searchInput` |
| `serial` | `showRootSerial` | `serialRoot` |
| `serial` | `showSubSerial` | `serialChild` |
| `options` | `showButton` | `optionsShowButton` |
| `options` | `showEditButton` | `optionsEditButton` |
| `options` | `showDeleteButton` | `optionsDeleteButton` |

Search feature initialization is declared as `initialize: "searchFrame"`.

## Validation

Run the focused integration verification from the runner repository:

```bash
node samples/v10/nested-options/verify.mjs
```

It checks:
- all switches enabled together;
- independent search sub-switches;
- all switches disabled;
- an existing search toolbar is not duplicated;
- a footer-bearing table keeps its header/body/footer action cells aligned.

The repository-wide `npm test` still has an unrelated legacy API test that expects
`src/v1/index.js`, which is absent in the supplied source bundle. That pre-existing
test failure is documented separately; the focused V10 integration verification is
the relevant check for this change.
