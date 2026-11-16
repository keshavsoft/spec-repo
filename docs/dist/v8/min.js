var e = {
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	}
}, t = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, n = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, r = {
	table: /* @__PURE__ */ JSON.parse("{\"simple\":{\"base\":{\"tagName\":\"div\",\"attributes\":{\"data-role\":\"table-parent\",\"id\":\"table-simple-id\"},\"children\":[{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-simple-table-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-simple-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-simple-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-simple-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-simple-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-simple-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-simple-footer-row-id\"},\"children\":[]}]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"},\"func\":\"twoDimensional\"}],\"rowOnColumn\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"}}],\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}},\"withFooter\":{\"base\":{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-with-footer-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-with-footer-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-with-footer-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-with-footer-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-with-footer-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-with-footer-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-with-footer-footer-row-id\"},\"children\":[]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"},{\"narration\":\"Build footer input cells\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildFooter\",\"func\":\"fromCollection\"}],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"func\":\"twoDimensional\"}]},\"bodyOnly\":{\"base\":{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-body-only-id\"},\"children\":[]},\"single\":[],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"func\":\"twoDimensional\"}]},\"footerOnly\":{\"base\":{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-footer-only-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-footer-only-footer-row-id\"},\"children\":[]}]},\"single\":[{\"narration\":\"Build footer input cells\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildFooter\",\"func\":\"fromCollection\"}],\"double\":[]},\"headerOnly\":{\"base\":{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-header-only-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-header-only-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-header-only-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-header-only-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-header-only-body-id\"},\"children\":[]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"double\":[]},\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}}"),
	select: {
		base: {
			tagName: "div",
			attributes: {
				"data-role": "select-container",
				id: "select-base-id"
			},
			children: []
		},
		single: [{
			narration: "Build select options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: [],
		columnOnRow: [{
			narration: "Build selects with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildSelect",
				rowKey: "buildOption"
			}
		}]
	},
	dataList: {
		simple: {
			base: {
				tagName: "div",
				attributes: {
					"data-role": "datalist-container",
					id: "data-list-simple-id"
				},
				children: []
			},
			single: [],
			double: [],
			columnOnRow: [{
				narration: "Build datalists with options",
				destinationPath: {
					fileName: "base",
					filePath: ["children"]
				},
				templateKey: {
					columnKey: "buildDataList",
					rowKey: "buildOption"
				}
			}]
		},
		base: {
			tagName: "div",
			attributes: {
				"data-role": "datalist-container",
				id: "data-list-base-id"
			},
			children: []
		},
		single: [],
		double: [],
		columnOnRow: [{
			narration: "Build datalists with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildDataList",
				rowKey: "buildOption"
			}
		}]
	},
	selectOptionsOnly: {
		base: [],
		single: [{
			narration: "Build options array",
			destinationPath: {
				fileName: "base",
				filePath: []
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	searchInput: {
		base: {
			tagName: "div",
			attributes: {
				class: "d-flex align-items-center gap-2",
				id: "search-input-base-id"
			},
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}",
					id: "search-input-label-id"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "search-input-field-id"
				}
			}]
		},
		single: [],
		double: []
	},
	form: {
		simple: {
			base: {
				tagName: "div",
				attributes: {
					class: "card shadow-sm border-0",
					id: "form-simple-id"
				},
				children: [
					{
						tagName: "div",
						attributes: {
							class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
							id: "form-simple-header-id"
						},
						children: [{
							tagName: "h2",
							textContent: "Data Entry Form",
							attributes: {
								class: "h5 fw-bold mb-0 text-dark",
								id: "form-simple-title-id"
							}
						}]
					},
					{
						tagName: "div",
						attributes: {
							class: "card-body p-4",
							id: "form-simple-body-id"
						},
						children: [{
							tagName: "form",
							attributes: {
								id: "form-simple-form-id",
								"data-role": "form-body"
							},
							children: []
						}]
					},
					{
						tagName: "div",
						attributes: {
							class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
							id: "form-simple-footer-id"
						},
						children: [{
							tagName: "button",
							textContent: "Reset",
							attributes: {
								type: "reset",
								class: "btn btn-outline-secondary",
								id: "form-simple-reset-button-id"
							}
						}, {
							tagName: "button",
							textContent: "Submit",
							attributes: {
								type: "submit",
								class: "btn btn-primary",
								id: "form-simple-submit-button-id"
							}
						}]
					}
				]
			},
			single: [{
				narration: "Build form fields from columns",
				destinationPath: {
					fileName: "base",
					dataRole: "form-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFormField",
				func: "fromCollection"
			}],
			double: []
		},
		base: {
			tagName: "div",
			attributes: {
				class: "card shadow-sm border-0",
				id: "form-base-id"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
						id: "form-base-header-id"
					},
					children: [{
						tagName: "h2",
						textContent: "Data Entry Form",
						attributes: {
							class: "h5 fw-bold mb-0 text-dark",
							id: "form-base-title-id"
						}
					}]
				},
				{
					tagName: "div",
					attributes: {
						class: "card-body p-4",
						id: "form-base-body-id"
					},
					children: [{
						tagName: "form",
						attributes: {
							id: "form-base-form-id",
							"data-role": "form-body"
						},
						children: []
					}]
				},
				{
					tagName: "div",
					attributes: {
						class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
						id: "form-base-footer-id"
					},
					children: [{
						tagName: "button",
						textContent: "Reset",
						attributes: {
							type: "reset",
							class: "btn btn-outline-secondary",
							id: "form-base-reset-button-id"
						}
					}, {
						tagName: "button",
						textContent: "Submit",
						attributes: {
							type: "submit",
							class: "btn btn-primary",
							id: "form-base-submit-button-id"
						}
					}]
				}
			]
		},
		single: [{
			narration: "Build form fields from columns",
			destinationPath: {
				fileName: "base",
				dataRole: "form-body",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["columns"]
			},
			templateKey: "buildFormField",
			func: "fromCollection"
		}],
		double: []
	}
}, i = {
	name: "spec-repo",
	version: "1.6.1"
}, a = ({ spec: e, tags: t, tagsSchema: n, definitions: r }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: i,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r
	});
}, o = e;
a({
	spec: e,
	tags: t,
	tagsSchema: n,
	definitions: r
});
export { o as default, r as definitions, e as spec, t as tags, n as tagsSchema };
