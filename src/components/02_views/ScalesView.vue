<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import ScaleCategoryList from '@/components/03_sections/scales/ScaleCategoryList.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ScaleCategory } from '@/types/interfaces'
  import { fetchScales } from '@/utils/fetch'

  const scaleCategories = ref<ScaleCategory[]>([])
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async() => {
    try {
      scaleCategories.value = await fetchScales()
    } catch (e: any) {
      error.value = true
      console.error(e.message)
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <h1>スケール一覧</h1>
    <ScaleCategoryList :scale-categories="scaleCategories" />
  </template>
  <template v-else>
    <FetchErrorMessage />
  </template>
</template>

<style scoped>
</style>
