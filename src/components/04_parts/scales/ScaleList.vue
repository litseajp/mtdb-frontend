<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import ScaleListItem from './ScaleListItem.vue'
  import type { ScaleCategory }  from '@/types/interfaces'
  import { insertBreakBeforeBrackets } from '@/utils/format'

  defineProps<{ scaleCategory: ScaleCategory }>()

  const { mdAndUp } = useDisplay()
</script>

<template>
  <div>
    <h2 v-if="mdAndUp">{{ scaleCategory.category }}</h2>
    <h2 v-else v-html="insertBreakBeforeBrackets(scaleCategory.category)" />
    <v-expansion-panels variant="accordion" class="mt-1">
      <template v-for="scaleInfo in scaleCategory.scales" :key="scaleInfo.path">
        <ScaleListItem :scale-info="scaleInfo" />
      </template>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
</style>
