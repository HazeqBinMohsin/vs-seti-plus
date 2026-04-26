// custom-css.js — Inject this into VSCode's DOM for full visual effects
// Use with an extension like "Custom CSS and JS Loader"

const css = `
  /* ===== Titlebar Gradient ===== */
  .monaco-workbench .part.titlebar > .titlebar-container {
    background: linear-gradient(to bottom, #171c1f, #151516) !important;
  }
  .monaco-workbench .part.titlebar > .window-title {
    background: transparent !important;
  }

  /* ===== Active Tab Gradient ===== */
  .monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab.active {
    background: linear-gradient(to bottom, #171c1f, #131313) !important;
    border-bottom: 2px solid #58a6ff !important;
  }
  .monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab {
    background: #151516 !important;
  }
  .monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab:hover {
    background: #1a1a1a !important;
  }

  /* ===== Translucent Editor Widgets with Blur ===== */
  .monaco-editor .suggest-widget,
  .monaco-editor .parameter-hints-widget,
  .monaco-editor .hover-widget,
  .monaco-editor .editor-widget {
    background: rgba(24, 24, 24, 0.75) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border: 1px solid #30363d !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
  }

  /* ===== Quick Pick / Command Palette ===== */
  .monaco-workbench .quick-input-widget {
    background: rgba(24, 24, 24, 0.75) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border: 1px solid #30363d !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5) !important;
  }

  /* ===== Dropdown Menus ===== */
  .monaco-menu .monaco-action-bar.vertical {
    background: rgba(21, 21, 22, 0.85) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid #30363d !important;
  }

  /* ===== Notifications ===== */
  .monaco-workbench .notifications-toasts .notification-toast {
    background: rgba(24, 24, 24, 0.75) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border: 1px solid #30363d !important;
  }

  /* ===== Smooth Scrollbar ===== */
  .monaco-scrollable-element > .scrollbar > .slider {
    border-radius: 4px !important;
    transition: background 0.2s ease !important;
  }

  /* ===== Selection Glow ===== */
  .monaco-editor .selected-text {
    box-shadow: 0 0 4px rgba(28, 47, 61, 0.5) !important;
  }

  /* ===== Active Line Subtle Glow ===== */
  .monaco-editor .current-line {
    border-left: 2px solid rgba(88, 166, 255, 0.15) !important;
  }
`;