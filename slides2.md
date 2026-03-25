---
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'JetBrains Mono, Fira Code, Consolas, monospace'
  mono: 'JetBrains Mono, Fira Code, monospace'
---

<style>
/* Глобальные сбросы */
html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
}

.slidev-layout {
  background: linear-gradient(135deg, #0d1117 0%, #1a1f2b 100%);
  color: #e6edf3;
  font-family: 'JetBrains Mono', monospace;
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100vw !important;
  max-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  position: relative !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}

/* Технологичный фон */
.slidev-layout::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(86, 148, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(86, 148, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}

.slidev-layout > * {
  position: relative;
  z-index: 1;
}

.content {
  text-align: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

h1 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: clamp(2rem, 8vw, 4rem);
  color: #58a6ff;
  margin: 0 0 0.3em 0;
  padding: 0;
  text-shadow: 0 0 20px rgba(88, 166, 255, 0.5);
  letter-spacing: -1px;
  line-height: 1.2;
  white-space: nowrap;
}

h2 {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: clamp(1.2rem, 5vw, 2.2rem);
  color: #7ee3b8;
  margin: 0;
  padding: 0 0 0 20px;
  border-left: 4px solid #ff7b72;
  display: inline-block;
  line-height: 1.4;
}
</style>

<div class="content">
  <h1>PRODUCT GOALS</h1>
  <h2>Q2 2024</h2>
</div>