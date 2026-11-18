# Nested options contract

The caller supplies only three top-level feature objects: `search`, `serial`, and
`options`. Each nested key is a boolean switch. The runner does not know the names
of these features or switches; the specification maps each switch to instruction
collections.

Set an individual switch to `false` or omit it to skip its instruction collection.
