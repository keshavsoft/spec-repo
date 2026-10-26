/**
 * Monaco Editor Controller for spec-repo
 * Strictly complies with the KeshavSoft { inParam } -> localParam naming convention.
 */

// Global State
let currentEditorInstance = null;
let currentFullSpec = null;
let currentActiveTag = "ALL";
let currentVersion = "v2";

// Configure Monaco AMD paths from CDN
require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
  }
});

/**
 * Initializes the Monaco Editor inside the target container.
 */
function createEditor({ inContainerElement, inInitialValue }) {
  const localContainerElement = inContainerElement;
  const localInitialValue = inInitialValue;

  const localEditor = monaco.editor.create(localContainerElement, {
    value: localInitialValue,
    language: "json",
    theme: "vs-dark",
    automaticLayout: true,
    fontSize: 13,
    fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
    lineHeight: 20,
    tabSize: 2,
    minimap: {
      enabled: true
    },
    folding: true,
    scrollBeyondLastLine: false,
    formatOnPaste: true,
    formatOnType: true
  });

  return localEditor;
}

/**
 * Loads spec data either from local relative path or fallback data object.
 */
async function fetchSpecData({ inVersion }) {
  const localVersion = inVersion;
  const localFilePath = `../src/${localVersion}/spec.json`;

  try {
    const localResponse = await fetch(localFilePath);
    if (localResponse.ok) {
      const localJson = await localResponse.json();
      return localJson;
    }
  } catch (localError) {
    console.info("Using embedded spec fallback:", localError);
  }

  // Fallback if running via file:// or static server where parent is unaccessible
  if (window.SpecRepoData && typeof window.SpecRepoData.getSpecByVersion === "function") {
    return window.SpecRepoData.getSpecByVersion({ inVersion: localVersion });
  }

  return {};
}

/**
 * Updates the Monaco editor's content with specified JSON or string.
 */
function setEditorContent({ inEditor, inContent, inFormat }) {
  const localEditor = inEditor;
  const localContent = inContent;
  const localFormat = inFormat;

  if (!localEditor) return;

  const localFormattedValue =
    typeof localContent === "string"
      ? localContent
      : JSON.stringify(localContent, null, 2);

  localEditor.setValue(localFormattedValue);

  if (localFormat) {
    setTimeout(() => {
      const localFormatAction = localEditor.getAction("editor.action.formatDocument");
      if (localFormatAction) {
        localFormatAction.run();
      }
    }, 50);
  }
}

/**
 * Populates the tag selector dropdown with keys from spec.json.
 */
function populateTagSelect({ inSelectElement, inSpec }) {
  const localSelectElement = inSelectElement;
  const localSpec = inSpec;

  if (!localSelectElement || !localSpec) return;

  localSelectElement.innerHTML = `<option value="ALL">All Definitions (Full spec.json)</option>`;

  Object.keys(localSpec).forEach((inKey) => {
    const localKey = inKey;
    const localOption = document.createElement("option");
    localOption.value = localKey;
    localOption.textContent = `${localKey} (${localSpec[localKey].tagName || "spec"})`;
    localSelectElement.appendChild(localOption);
  });
}

/**
 * Extracts `${placeholder}` tokens from a tag spec object.
 */
function extractTokens({ inSpecObj }) {
  const localSpecObj = inSpecObj;
  const localString = JSON.stringify(localSpecObj);
  const localMatches = localString.match(/\$\{[a-zA-Z0-9_:]+\}/g);
  if (!localMatches) return [];
  return Array.from(new Set(localMatches));
}

/**
 * Renders the right sidebar tag cards.
 */
function renderSidebarCards({ inContainerElement, inSpec, inFilterText, inActiveTag, inOnSelectTag }) {
  const localContainerElement = inContainerElement;
  const localSpec = inSpec;
  const localFilterText = inFilterText ? inFilterText.toLowerCase().trim() : "";
  const localActiveTag = inActiveTag;
  const localOnSelectTag = inOnSelectTag;

  if (!localContainerElement || !localSpec) return;

  localContainerElement.innerHTML = "";
  const localKeys = Object.keys(localSpec);

  const localFilteredKeys = localKeys.filter((inKey) => {
    const localKey = inKey;
    const localTagName = (localSpec[localKey].tagName || "").toLowerCase();
    return localKey.toLowerCase().includes(localFilterText) || localTagName.includes(localFilterText);
  });

  if (localFilteredKeys.length === 0) {
    localContainerElement.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 13px; text-align: center;">No matching tag specs found</div>`;
    return;
  }

  localFilteredKeys.forEach((inKey) => {
    const localKey = inKey;
    const localItem = localSpec[localKey];
    const localTokens = extractTokens({ inSpecObj: localItem });
    const localChildCount = Array.isArray(localItem.children) ? localItem.children.length : 0;

    const localCard = document.createElement("div");
    localCard.className = `spec-card ${localActiveTag === localKey ? "active" : ""}`;

    localCard.innerHTML = `
      <div class="card-top">
        <span class="card-name">${localKey}</span>
        <span class="card-tag-pill">&lt;${localItem.tagName || "tag"}&gt;</span>
      </div>
      <div class="card-meta">
        ${localChildCount > 0 ? `<span class="meta-pill">${localChildCount} children</span>` : ""}
        ${localItem.attributes ? `<span class="meta-pill">${Object.keys(localItem.attributes).length} attrs</span>` : ""}
        ${localTokens.map((inTok) => `<span class="meta-pill meta-token">${inTok}</span>`).join("")}
      </div>
    `;

    localCard.addEventListener("click", () => {
      if (typeof localOnSelectTag === "function") {
        localOnSelectTag({ inSelectedKey: localKey });
      }
    });

    localContainerElement.appendChild(localCard);
  });
}

/**
 * Displays a non-blocking toast message.
 */
function showToast({ inMessage }) {
  const localMessage = inMessage;
  let localToast = document.getElementById("toastNotice");

  if (!localToast) {
    localToast = document.createElement("div");
    localToast.id = "toastNotice";
    localToast.className = "toast-notice";
    document.body.appendChild(localToast);
  }

  localToast.textContent = localMessage;
  localToast.classList.add("show");

  setTimeout(() => {
    localToast.classList.remove("show");
  }, 2200);
}

/**
 * Copies text to user clipboard with visual confirmation.
 */
async function copyToClipboard({ inText, inSuccessMessage }) {
  const localText = inText;
  const localSuccessMessage = inSuccessMessage;

  try {
    await navigator.clipboard.writeText(localText);
    showToast({ inMessage: localSuccessMessage });
  } catch (localErr) {
    console.error("Clipboard copy failed:", localErr);
    showToast({ inMessage: "Failed to copy to clipboard" });
  }
}

/**
 * Switches the active tag view in Monaco.
 */
function switchTagView({ inTagKey, inEditor, inFullSpec, inTagSelectElement, inSidebarContainerElement }) {
  const localTagKey = inTagKey;
  const localEditor = inEditor;
  const localFullSpec = inFullSpec;
  const localTagSelectElement = inTagSelectElement;
  const localSidebarContainerElement = inSidebarContainerElement;

  currentActiveTag = localTagKey;

  if (localTagSelectElement) {
    localTagSelectElement.value = localTagKey;
  }

  if (localTagKey === "ALL") {
    setEditorContent({
      inEditor: localEditor,
      inContent: localFullSpec,
      inFormat: true
    });
  } else if (localFullSpec && localFullSpec[localTagKey]) {
    const localSingleSpec = { [localTagKey]: localFullSpec[localTagKey] };
    setEditorContent({
      inEditor: localEditor,
      inContent: localSingleSpec,
      inFormat: true
    });
  }

  const localSearchInput = document.getElementById("searchInput");
  const localFilterText = localSearchInput ? localSearchInput.value : "";
  renderSidebarCards({
    inContainerElement: localSidebarContainerElement,
    inSpec: localFullSpec,
    inFilterText: localFilterText,
    inActiveTag: currentActiveTag,
    inOnSelectTag: ({ inSelectedKey }) => {
      switchTagView({
        inTagKey: inSelectedKey,
        inEditor: localEditor,
        inFullSpec: localFullSpec,
        inTagSelectElement: localTagSelectElement,
        inSidebarContainerElement: localSidebarContainerElement
      });
    }
  });
}

/**
 * Updates UI tag counter and validation status indicator.
 */
function refreshStatus({ inCounterElement, inSpec }) {
  const localCounterElement = inCounterElement;
  const localSpec = inSpec;

  if (localCounterElement && localSpec) {
    const localCount = Object.keys(localSpec).length;
    localCounterElement.textContent = `${localCount} Tags Loaded`;
  }
}

/**
 * Main application bootstrap function.
 */
async function startApplication() {
  const localContainer = document.getElementById("monacoContainer");
  const localLoading = document.getElementById("editorLoading");
  const localVersionSelect = document.getElementById("versionSelect");
  const localTagSelect = document.getElementById("tagSelect");
  const localSearchInput = document.getElementById("searchInput");
  const localSidebarList = document.getElementById("sidebarList");
  const localCopyBtn = document.getElementById("copyBtn");
  const localFormatBtn = document.getElementById("formatBtn");
  const localResetBtn = document.getElementById("resetBtn");
  const localTagCountBadge = document.getElementById("tagCountBadge");

  // Fetch initial spec data
  currentFullSpec = await fetchSpecData({ inVersion: currentVersion });

  // Require Monaco main bundle
  require(["vs/editor/editor.main"], function () {
    if (localLoading) {
      localLoading.style.display = "none";
    }

    currentEditorInstance = createEditor({
      inContainerElement: localContainer,
      inInitialValue: JSON.stringify(currentFullSpec, null, 2)
    });

    populateTagSelect({
      inSelectElement: localTagSelect,
      inSpec: currentFullSpec
    });

    refreshStatus({
      inCounterElement: localTagCountBadge,
      inSpec: currentFullSpec
    });

    renderSidebarCards({
      inContainerElement: localSidebarList,
      inSpec: currentFullSpec,
      inFilterText: "",
      inActiveTag: currentActiveTag,
      inOnSelectTag: ({ inSelectedKey }) => {
        switchTagView({
          inTagKey: inSelectedKey,
          inEditor: currentEditorInstance,
          inFullSpec: currentFullSpec,
          inTagSelectElement: localTagSelect,
          inSidebarContainerElement: localSidebarList
        });
      }
    });

    // Event: Version Switcher
    if (localVersionSelect) {
      localVersionSelect.addEventListener("change", async (inEvent) => {
        const localSelectedVersion = inEvent.target.value;
        currentVersion = localSelectedVersion;
        currentFullSpec = await fetchSpecData({ inVersion: currentVersion });
        currentActiveTag = "ALL";

        populateTagSelect({
          inSelectElement: localTagSelect,
          inSpec: currentFullSpec
        });

        refreshStatus({
          inCounterElement: localTagCountBadge,
          inSpec: currentFullSpec
        });

        switchTagView({
          inTagKey: "ALL",
          inEditor: currentEditorInstance,
          inFullSpec: currentFullSpec,
          inTagSelectElement: localTagSelect,
          inSidebarContainerElement: localSidebarList
        });

        showToast({ inMessage: `Switched to ${currentVersion.toUpperCase()} spec` });
      });
    }

    // Event: Tag Dropdown
    if (localTagSelect) {
      localTagSelect.addEventListener("change", (inEvent) => {
        const localTagKey = inEvent.target.value;
        switchTagView({
          inTagKey: localTagKey,
          inEditor: currentEditorInstance,
          inFullSpec: currentFullSpec,
          inTagSelectElement: localTagSelect,
          inSidebarContainerElement: localSidebarList
        });
      });
    }

    // Event: Search Filter
    if (localSearchInput) {
      localSearchInput.addEventListener("input", (inEvent) => {
        const localFilterVal = inEvent.target.value;
        renderSidebarCards({
          inContainerElement: localSidebarList,
          inSpec: currentFullSpec,
          inFilterText: localFilterVal,
          inActiveTag: currentActiveTag,
          inOnSelectTag: ({ inSelectedKey }) => {
            switchTagView({
              inTagKey: inSelectedKey,
              inEditor: currentEditorInstance,
              inFullSpec: currentFullSpec,
              inTagSelectElement: localTagSelect,
              inSidebarContainerElement: localSidebarList
            });
          }
        });
      });
    }

    // Event: Copy Button
    if (localCopyBtn) {
      localCopyBtn.addEventListener("click", () => {
        if (!currentEditorInstance) return;
        const localText = currentEditorInstance.getValue();
        copyToClipboard({
          inText: localText,
          inSuccessMessage: "JSON copied to clipboard!"
        });
      });
    }

    // Event: Format Button
    if (localFormatBtn) {
      localFormatBtn.addEventListener("click", () => {
        if (!currentEditorInstance) return;
        const localFormatAction = currentEditorInstance.getAction("editor.action.formatDocument");
        if (localFormatAction) {
          localFormatAction.run();
          showToast({ inMessage: "Document formatted" });
        }
      });
    }

    // Event: Reset Button
    if (localResetBtn) {
      localResetBtn.addEventListener("click", () => {
        switchTagView({
          inTagKey: "ALL",
          inEditor: currentEditorInstance,
          inFullSpec: currentFullSpec,
          inTagSelectElement: localTagSelect,
          inSidebarContainerElement: localSidebarList
        });
        showToast({ inMessage: "Reset to full spec definition" });
      });
    }
  });
}

// Start application when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  startApplication();
});
