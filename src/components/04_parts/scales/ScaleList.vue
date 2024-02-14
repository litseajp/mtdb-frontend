<script setup lang="ts">
  import ScaleListItem from './ScaleListItem.vue'
  import type { ScaleCategory }  from '@/types/interfaces'

  defineProps<{ scaleCategory: ScaleCategory }>()
</script>

<template>
  <div>
    <h2>{{ scaleCategory.category }}</h2>
    <v-expansion-panels variant="accordion">
      <template v-for="scaleInfo in scaleCategory.scales" :key="scaleInfo.path">
        <ScaleListItem :scale-info="scaleInfo" />
      </template>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
</style>
