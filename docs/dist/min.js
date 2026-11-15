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
		attributes: { "data-name": "${columnName}" },
		children: []
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
	table: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "table-parent" },
				children: [{
					tagName: "table",
					attributes: { class: "table table-hover table-striped align-middle border mb-0" },
					children: [
						{
							tagName: "colgroup",
							attributes: { "data-role": "table-colgroup" },
							children: []
						},
						{
							tagName: "thead",
							attributes: {
								class: "table-dark",
								"data-role": "table-header"
							},
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-header-row" },
								children: []
							}]
						},
						{
							tagName: "tbody",
							attributes: { "data-role": "table-body" },
							children: []
						},
						{
							tagName: "tfoot",
							attributes: { "data-role": "table-footer" },
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-footer-row" },
								children: []
							}]
						}
					]
				}]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: {
					rowKey: "buildBodyTr",
					columnKey: "buildBodyCell"
				},
				func: "twoDimensional"
			}]
		},
		withFooter: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					},
					{
						tagName: "tfoot",
						attributes: { "data-role": "table-footer" },
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-footer-row" },
							children: []
						}]
					}
				]
			},
			single: [
				{
					narration: "Build column widths",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildColGroup",
					func: "fromCollection"
				},
				{
					narration: "Build table header",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildHeader",
					func: "fromCollection"
				},
				{
					narration: "Build footer input cells",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildFooter",
					func: "fromCollection"
				}
			],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		bodyOnly: {
			base: {
				tagName: "tbody",
				attributes: { "data-role": "table-body" },
				children: []
			},
			single: [],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		footerOnly: {
			base: {
				tagName: "tfoot",
				attributes: { "data-role": "table-footer" },
				children: [{
					tagName: "tr",
					attributes: { "data-role": "table-footer-row" },
					children: []
				}]
			},
			single: [{
				narration: "Build footer input cells",
				destinationPath: {
					fileName: "base",
					dataRole: "table-footer-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFooter",
				func: "fromCollection"
			}],
			double: []
		},
		headerOnly: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					}
				]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: []
		}
	},
	select: {
		base: {
			tagName: "select",
			attributes: {
				id: "${columnName}",
				"data-name": "${columnName}"
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
		double: []
	},
	dataList: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "datalist-parent" },
				children: []
			},
			single: [{
				narration: "Build datalist control from columns",
				destinationPath: {
					fileName: "base",
					dataRole: "datalist-parent",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildDataList",
				func: "fromCollection"
			}, {
				narration: "Build datalist options from data",
				destinationPath: {
					fileName: "base",
					dataRole: "datalist-control",
					filePath: ["children"]
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
		base: {
			tagName: "div",
			attributes: { "data-role": "datalist-parent" },
			children: []
		},
		single: [{
			narration: "Build datalist control from columns",
			destinationPath: {
				fileName: "base",
				dataRole: "datalist-parent",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["columns"]
			},
			templateKey: "buildDataList",
			func: "fromCollection"
		}, {
			narration: "Build datalist options from data",
			destinationPath: {
				fileName: "base",
				dataRole: "datalist-control",
				filePath: ["children"]
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
			attributes: { class: "d-flex align-items-center gap-2" },
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "${id}"
				}
			}]
		},
		single: [],
		double: []
	},
	form: { base: {
		tagName: "div",
		attributes: { class: "card shadow-sm border-0" },
		children: [{
			tagName: "div",
			attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
			children: [{
				tagName: "h2",
				textContent: "${title}",
				attributes: { class: "h5 fw-bold mb-0 text-dark" }
			}]
		}, {
			tagName: "div",
			attributes: { class: "card-body p-4" },
			children: [{
				tagName: "form",
				attributes: {
					id: "${formId}",
					"data-role": "form-body"
				},
				children: []
			}]
		}]
	} }
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
