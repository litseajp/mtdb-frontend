<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import AvailableChordCategoryList from '@/components/03_sections/available_chord/AvailableChordCategoryList.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import NotFoundMessage from '@/components/03_sections/shared/NotFoundMessage.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { AvailableChords } from '@/types/interfaces'
  import { fetchAvailableChord } from '@/utils/fetch'
  import { setMetaTitle } from '@/utils/handleTag'

  const route = useRoute()
  const keyParam = route.params.key as string

  const availableChords = ref<AvailableChords>({ key: '', categories: [] })
  const loading = ref(true)
  const error = ref(false)
  const invalidParam = ref(false)

  const fetchData = async() => {
    try {
      availableChords.value = await fetchAvailableChord(keyParam)
      setMetaTitle(`${availableChords.value.key }のアヴェイラブルコード`)
    } catch (e: any) {
      error.value = true

      if (e.response.data.error) {
        console.error(`ERROR: ${e.response.data.error}`)
        invalidParam.value = true
      } else {
        console.error(e.message)
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  const linkInfo = { path: '/available-chords', title: 'キー一覧' }
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <h1>{{ availableChords.key }}のアヴェイラブルコード</h1>
    <AvailableChordCategoryList :categories="availableChords.categories" />
    <BackwardLink :linkInfo="linkInfo" />
  </template>
  <template v-else-if='invalidParam'>
    <NotFoundMessage />
    <BackwardLink />
  </template>
  <template v-else>
    <FetchErrorMessage />
    <BackwardLink />
  </template>
</template>

<style scoped>
  @media screen and (max-width: 600px) {
    h1 {
      font-size: clamp(16px, 4.75vw, 24px);
    }
  }
</style>
