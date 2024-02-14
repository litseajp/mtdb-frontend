<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ChordDetails } from '@/types/interfaces'
  import { fetchChord } from '@/utils/fetch'

  const route = useRoute()
  const chordParam = route.params.chord as string
  const rootParam = route.query.root as string

  const chord = ref<ChordDetails>({ name: '', description: '', tones: [], positions: [] })
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async() => {
    try {
      chord.value = await fetchChord(chordParam, rootParam)
    } catch (e: any) {
      error.value = true

      if (e.response.data.error) {
        console.error(`ERROR: ${e.response.data.error}`)
      } else {
        console.error(e.message)
      }
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  const linkInfo = { path: '/chords', title: 'コード一覧' }
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <h1>{{ chord.name }}</h1>
    <BackwardLink :linkInfo="linkInfo" />
  </template>
  <template v-else>
    <FetchErrorMessage />
    <BackwardLink />
  </template>
</template>

<style scoped>
</style>
