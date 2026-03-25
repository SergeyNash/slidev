<script setup lang="ts">
const legend = [
  { n: 1, text: 'Развертывание приложений и микросервисов в тестовом контуре' },
  { n: 2, text: 'Интеграция с DAST' },
  { n: 3, text: 'Динамический анализ приложений и микросервисов в тестовом контуре' },
  { n: 4, text: 'Разворачивание приложений и микросервисов в продуктивном контуре' },
  { n: 5, text: 'Динамический анализ приложений и микросервисов в продуктивном контуре' },
  { n: 6, text: 'Триаж уязвимостей и работа с отчетами' },
] as const
</script>

<template>
  <div class="ptbb-legend-root">
    <div class="ptbb-legend">
      <div v-for="(row, idx) in legend" :key="idx" class="ptbb-legend-row">
        <span class="ptbb-legend-num">{{ row.n }}</span>
        <span class="ptbb-legend-text">{{ row.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ptbb-legend-root {
  width: 100%;
  color: #fff;
  font-family: 'Inter', system-ui, sans-serif;
  margin-top: 0.25rem;
}

.ptbb-legend {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.35rem 1.25rem;
  font-size: 0.85rem;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.78);
}

.ptbb-legend-row {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
}

.ptbb-legend-num {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #d33833;
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.08em;
}

.ptbb-legend-text {
  flex: 1;
  min-width: 0;
}

@media (max-width: 720px) {
  .ptbb-legend {
    grid-template-columns: 1fr;
  }
}
</style>
