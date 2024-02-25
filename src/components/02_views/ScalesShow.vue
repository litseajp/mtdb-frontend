<script setup lang="ts">
  import { computed, onMounted, provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import PageDescription from '@/components/03_sections/shared/PageDescription.vue'
  import ScaleToneList from '@/components/03_sections/scale/ScaleToneList.vue'
  import KeyboardDiagram from '@/components/03_sections/shared/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/03_sections/shared/FretboardDiagram.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import NotFoundMessage from '@/components/03_sections/shared/NotFoundMessage.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ScaleDetails } from '@/types/interfaces'
  import { scaleKey, tonesKey } from '@/types/injectionKeys'
  import { fetchScale } from '@/utils/fetch'
  import { setMetaTitle } from '@/utils/handleTag'
  import { insertBreakForScaleName } from '@/utils/format'

  const route = useRoute()
  const scaleParam = route.params.scale as string
  const tonicParam = route.query.tonic as string

  const { mdAndUp } = useDisplay()

  const scale = ref<ScaleDetails>({ name: '', description: '', tones: [] })
  const loading = ref(true)
  const error = ref(false)
  const invalidParam = ref(false)

  const fetchData = async() => {
    try {
      scale.value = await fetchScale(scaleParam, tonicParam)
      setMetaTitle(scale.value.name)
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

  provide(scaleKey, scale)
  provide(tonesKey, computed(() => scale.value.tones))

  const linkInfo = { path: '/scales', title: 'スケール一覧' }
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <h1 v-if="mdAndUp">{{ scale.name }}</h1>
    <h1 v-else v-html="insertBreakForScaleName(scale.name)" />
    <PageDescription :text="scale.description" />
    <ScaleToneList />
    <KeyboardDiagram />
    <FretboardDiagram />
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
</style>
