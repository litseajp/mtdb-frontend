<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import KeyCategoryList from '@/components/03_sections/available_chords/KeyCategoryList.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { KeyCategory } from '@/types/interfaces'
  import { fetchAvailableChords } from '@/utils/fetch'

  const keyCategories = ref<KeyCategory[]>([])
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async() => {
    try {
      keyCategories.value = await fetchAvailableChords()
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
    <h1>アヴェイラブルコード</h1>
    <KeyCategoryList :key-categories="keyCategories" />
    <BackwardLink />
  </template>
  <template v-else>
    <FetchErrorMessage />
    <BackwardLink />
  </template>
</template>

<style scoped>
</style>
