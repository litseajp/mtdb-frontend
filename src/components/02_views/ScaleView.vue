<script setup lang="ts">
  import { computed, onMounted, provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import PageDescription from '@/components/03_sections/shared/PageDescription.vue'
  import ScaleToneList from '@/components/03_sections/scale/ScaleToneList.vue'
  import KeyboardDiagram from '@/components/03_sections/shared/KeyboardDiagram.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ScaleDetails } from '@/types/interfaces'
  import { scaleKey, tonesKey } from '@/types/injectionKeys'
  import { fetchScale } from '@/utils/fetch'

  const route = useRoute()
  const scaleParam = route.params.scale as string
  const tonicParam = route.query.tonic as string

  const scale = ref<ScaleDetails>({ name: '', description: '', tones: [] })
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async() => {
    try {
      scale.value = await fetchScale(scaleParam, tonicParam)
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

  provide(scaleKey, scale)
  provide(tonesKey, computed(() => scale.value.tones))

  const linkInfo = { path: '/scales', title: 'スケール一覧' }
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <h1>{{ scale.name }}</h1>
    <PageDescription :text="scale.description" />
    <ScaleToneList />
    <KeyboardDiagram />
    <BackwardLink :linkInfo="linkInfo" />
  </template>
  <template v-else>
    <FetchErrorMessage />
    <BackwardLink />
  </template>
</template>

<style scoped>
</style>
