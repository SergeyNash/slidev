<script setup lang="ts">
import { useNav } from '@slidev/client/composables/useNav.ts'
import { computed } from 'vue'

const { currentSlideNo, total, isPrintMode } = useNav()

const visible = computed(() => !isPrintMode.value && total.value > 0)

const pct = computed(() => {
  const n = total.value
  if (n <= 0)
    return 0
  return (currentSlideNo.value / n) * 100
})
</script>

<template>
  <div
    v-if="visible"
    class="deck-progress"
    aria-hidden="true"
  >
    <div class="deck-progress__label">
      {{ currentSlideNo }} / {{ total }}
    </div>
    <div class="deck-progress__track">
      <div
        class="deck-progress__fill"
        :style="{ width: `${pct}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.deck-progress {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.deck-progress__label {
  align-self: flex-end;
  padding: 2px 12px 6px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--muted, rgba(255, 255, 255, 0.55));
  text-shadow: 0 0 12px color-mix(in srgb, var(--primary, #00d4ff) 35%, transparent);
}

.deck-progress__track {
  height: 4px;
  background: color-mix(in srgb, var(--primary, #00d4ff) 12%, transparent);
}

.deck-progress__fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--primary, #00d4ff) 85%, transparent),
    var(--primary, #00d4ff)
  );
  box-shadow: 0 0 14px color-mix(in srgb, var(--primary, #00d4ff) 45%, transparent);
  transition: width 0.28s ease-out;
}
</style>
