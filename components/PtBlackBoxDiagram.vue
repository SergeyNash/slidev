<script setup lang="ts">
/**
 * SVG: assets/cicd.svg (?raw). Легенда справа в узкой колонке (.panel).
 */
import cicdSvg from '../assets/cicd.svg?raw'
</script>

<template>
  <div class="ptbb-root">
    <div class="ptbb-main">
      <div class="ptbb-diagram-col">
        <div class="ptbb-stage" v-html="cicdSvg" />
      </div>
      <aside class="panel ptbb-legend-panel">
        <div class="status active">легенда</div>
        <PtBlackBoxLegend />
      </aside>
    </div>
  </div>
</template>

<style scoped>
.ptbb-root {
  container-type: inline-size;
  container-name: ptbb;
  position: relative;
  width: 100%;
  margin-top: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.5rem;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
  background: transparent;
  overflow: visible;
}

/* схема слева, легенда справа; легенда по вертикали по центру относительно SVG */
.ptbb-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) min(32cqi, 300px);
  gap: 0.5rem 0.65rem;
  align-items: center;
  width: 100%;
}

.ptbb-diagram-col {
  min-width: 0;
  display: flex;
  justify-content: flex-start;
}

.ptbb-stage {
  width: 100%;
  max-width: min(62.5cqi, 621px);
  line-height: 0;
}

.ptbb-stage :deep(svg) {
  display: block;
  width: 100%;
  height: auto;
}

.ptbb-legend-panel {
  margin-top: 0;
  padding: 0.5rem 0.55rem 0.45rem;
  min-width: 0;
}

/* компактная одноколоночная легенда */
.ptbb-legend-panel :deep(.ptbb-legend-root) {
  margin-top: 0.28rem;
}

.ptbb-legend-panel :deep(.ptbb-legend) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2rem 0;
  font-size: 0.62rem;
  line-height: 1.25;
  color: var(--text, #ccd8e8);
}

.ptbb-legend-panel :deep(.ptbb-legend-row) {
  gap: 0.3rem;
  align-items: flex-start;
}

.ptbb-legend-panel :deep(.ptbb-legend-num) {
  width: 1rem;
  height: 1rem;
  font-size: 0.52rem;
  margin-top: 0.04em;
}

.ptbb-legend-panel :deep(.ptbb-legend-text) {
  color: #9eb6cc;
}

@supports not (container-type: inline-size) {
  .ptbb-main {
    grid-template-columns: minmax(0, 1fr) min(32%, 280px);
  }

  .ptbb-stage {
    max-width: min(62.5%, 621px);
  }
}

/* узкий слайд / мобильный: легенда под схемой */
@media (max-width: 900px) {
  .ptbb-main {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .ptbb-legend-panel {
    max-width: 100%;
    width: 100%;
  }

  .ptbb-legend-panel :deep(.ptbb-legend) {
    grid-template-columns: 1fr 1fr;
    font-size: 0.65rem;
    gap: 0.25rem 0.75rem;
  }
}

@media (max-width: 720px) {
  .ptbb-stage {
    max-width: min(90cqi, 621px);
  }

  .ptbb-root {
    padding-left: 0.5rem;
  }

  .ptbb-legend-panel :deep(.ptbb-legend) {
    grid-template-columns: 1fr;
  }
}
</style>
