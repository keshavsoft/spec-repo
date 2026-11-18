# Table options

The first option-driven renderer is `table.simple`.

The caller supplies only boolean switches:

```js
{
    search: { showLabel: true, showHelper: true, showInput: true },
    serial: { showRootSerial: true, showSubSerial: true },
    options: { showButton: true, showEditButton: true, showDeleteButton: true }
}
```

- `definitions.json` selects the `table` option collection for `table.simple`.
- `instructions.json` contains that collection and its instruction references under `options.table`.
- `spec.json` contains the templates used by those instructions.

No option mapping is stored in `definitions.json`; it only names the collection.
