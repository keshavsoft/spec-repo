# spec-repo

> **Canonical, zero-dependency declarative JSON Tag Specification Catalog.**  
> Pure serializable JSON representations of valid HTML tags, layout structures, and component templates for declarative DOM compilers.

[![Live Monaco Playground](https://img.shields.io/badge/Monaco_Playground-Interactive_Explorer-4f46e5?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://keshavsoft.github.io/spec-repo/)
[![GitHub Pages](https://img.shields.io/badge/Docs_Hub-GitHub_Pages-0ea5e9?style=for-the-badge&logo=github&logoColor=white)](https://keshavsoft.github.io/spec-repo/)
[![License: ISC](https://img.shields.io/badge/License-ISC-34d399?style=for-the-badge)](LICENSE)

---

## 🌐 Interactive Documentation Hub

Explore, inspect, and test the full catalog live in the browser using the integrated **Monaco Editor Playground**:

👉 **[Launch Monaco Playground Hub](https://keshavsoft.github.io/spec-repo/)**

### Playground Features
* 💻 **Full Monaco Editor**: VS Code-powered dark theme (`vs-dark`), syntax validation, line numbering, minimap, and code folding.
* 🏷️ **Tag Catalog Inspector**: Live sidebar with 17+ tag specifications, listing target HTML elements (`<col>`, `<th>`, `<td>`, `<button>`), attribute counts, and placeholders.
* 🔍 **Isolate & Focus**: Click any tag in the sidebar or select it from the dropdown to isolate and format its exact JSON definition.
* 🔄 **Multi-Version Switching**: Toggle between `v2 (Current)` and `v1` specs on the fly.
* 📋 **One-Click Format & Copy**: Format JSON via Monaco API and copy to clipboard with toast notifications.

---

## 📖 The `spec-repo` Story

In declarative UI architectures, DOM generation often becomes tightly coupled to imperative JavaScript builders or messy template literals. 

**`spec-repo` decouples tag design from the compiler engine.**

Instead of hardcoding DOM definitions inside compiler logic, `spec-repo` acts as the **Single Source of Truth (SSOT)**:
1. **Pure JSON Specifications**: Every component is represented as clean, serializable JSON with `tagName`, `attributes`, `textContent`, and `children`.
2. **Template Interpolation Placeholders**: Uses lightweight parameter tokens (such as `${columnName}`, `${width}`, `${rowValue}`) that declarative compilers hydrate at runtime with live data.
3. **Engine Agnostic**: Consumable by any compiler in the KeshavSoft ecosystem—including `spec-to-dom`, `json-to-dom`, and `json-to-tag`.

---

## 📦 Tag Catalog Overview (`v2`)

The catalog contains declarative definitions for table structures, form inputs, buttons, and datalists:

| Specification Key | Target Tag | Interpolations | Purpose / Description |
|---|---|---|---|
| `buildBodyTr` | `<tr>` | — | Table body row with `align-middle` class |
| `buildColGroup` | `<col>` | `${width}` | Table column sizing specification |
| `buildHeader` | `<th>` | `${columnName}` | Uppercase styled table column header |
| `buildFooter` | `<td>` | `${columnName}` | Footer cell containing input field with datalist binding |
| `buildBodyCell` | `<td>` | `${rowValue}` | Table body data cell with secondary text styling |
| `button` | `<button>` | `${columnName}` | Primary action button (`btn-primary btn-sm`) |
| `buttonCell` | `<td>` | `${agg:count}` | Centered cell housing an aggregated count button |
| `optionsButtonCell` | `<td>` | — | Centered cell with `show` button (`ks-btn-show`) |
| `buildOption` | `<option>` | `${rowValue}` | Datalist / Select dropdown option item |
| `buildSelect` | `<select>` | — | Select element for ledger selection |
| `buildDataList` | `<datalist>` | `${columnName}` | Datalist container bound to column name |
| `emptyCell` | `<td>` | — | Empty spacing table cell |
| `headerSerialCell` | `<th>` | — | Row sequence header cell (`#`) |
| `colGroupForSerial` | `<col>` | — | Serial number column width (`50px`) |
| `colGroupForOption` | `<col>` | — | Options action column width (`100px`) |
| `headerForOption` | `<th>` | — | Column header for row options |
| `tdWithButtonSaveWarning` | `<td>` | — | Centered cell housing warning save button (`ks-btn-save`) |

---

## 🚀 Installation & Usage

### 1. Installation

```bash
npm install spec-repo
```

### 2. ES Module Import

```javascript
// Import default specification (latest v2)
import spec from "spec-repo";

// Or named import
import { spec } from "spec-repo";

// Access individual specifications
console.log(spec.buildHeader);
/*
{
  "tagName": "th",
  "textContent": "${columnName}",
  "attributes": {
    "class": "py-3 px-3 fw-semibold text-uppercase small"
  }
}
*/
```

### 3. Direct Version Import

You can directly import specific version specifications:

```javascript
// Modern Node.js JSON module import
import specV2 from "spec-repo/src/v2/spec.json" with { type: "json" };
import specV1 from "spec-repo/src/v1/spec.json" with { type: "json" };
```

---

## 🛠️ Repository Structure

```
spec-repo/
├── docs/                     # Interactive Documentation & Monaco Playground
│   ├── index.html            # GitHub Pages entry point
│   ├── css/
│   │   └── style.css         # Modern dark UI and responsive styling
│   └── js/
│       ├── index.js          # Monaco editor controller (in/local convention)
│       └── specData.js       # Bundled offline & file:// fallback data
├── src/
│   ├── index.js              # Entry re-exporting latest version (v2)
│   ├── v1/
│   │   ├── index.js          # v1 instruction runner
│   │   └── spec.json         # v1 specification catalog
│   └── v2/
│       ├── index.js          # v2 specification export
│       └── spec.json         # v2 canonical specification catalog
├── package.json
└── README.md
```

---

## 📐 Parameter Naming Convention

All JavaScript code and controllers in this repository follow the KeshavSoft single-object parameter standard:

1. **Single Configuration Object**: Every function receives arguments via a destructured config object.
2. **`in`-Prefixed Inputs**: Parameters are named with an `in` prefix (e.g., `inEditor`, `inSpec`, `inVersion`).
3. **`local`-Prefixed Variables**: Inputs are mapped to `local`-prefixed variables at the very top of the function body.
4. **Internal Logic**: Only `local`-prefixed variables are referenced throughout the function.

```javascript
function switchTagView({ inTagKey, inEditor, inFullSpec }) {
  // 1. Assign inputs to local variables
  const localTagKey = inTagKey;
  const localEditor = inEditor;
  const localFullSpec = inFullSpec;

  // 2. Execute logic using only local variables
  if (localTagKey === "ALL") {
    localEditor.setValue(JSON.stringify(localFullSpec, null, 2));
  }
}
```

---

## 🔗 Related Ecosystem Projects

* [**`json-to-tag`**](https://github.com/keshavsoft/json-to-tag): Fast zero-dependency declarative JSON-to-DOM compiler.
* [**`tag-to-json`**](https://github.com/keshavsoft/tag-to-json): DOM element to JSON specification extractor.
* [**`monacoEditor`**](https://github.com/keshavsoft/monacoEditor): Browser-based developer code editing platform.

---

## 📄 License

[ISC](LICENSE) © [KeshavSoft](https://github.com/keshavsoft)
