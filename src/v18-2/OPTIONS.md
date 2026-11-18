# Options

Pass only the switches the UI should enable:

```js
{
    search: { showLabel: true, showHelper: true, showInput: true },
    serial: { showRootSerial: true, showSubSerial: true },
    options: { showButton: true, showEditButton: true, showDeleteButton: true }
}
```

`definitions.json` maps each switch to an instruction name. `instructions.json` supplies the instructions, and `spec.json` supplies their templates. The runner does not contain feature-specific UI logic.
