<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import ChordCategoryList from '@/components/03_sections/chords/ChordCategoryList.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ChordCategory } from '@/types/interfaces'
  import { fetchChords } from '@/utils/fetch'

  const chordCategories = ref<ChordCategory[]>([])
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async() => {
    try {
      chordCategories.value = await fetchChords()
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
    <h1>コード一覧</h1>
    <ChordCategoryList :chord-categories="chordCategories" />
    <BackwardLink />
  </template>
  <template v-else>
    <FetchErrorMessage />
    <BackwardLink />
  </template>
</template>

<style scoped>
</style>
