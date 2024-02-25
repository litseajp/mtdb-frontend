<script setup lang="ts">
  import { computed, onMounted, provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import LoadingMessage from '@/components/03_sections/shared/LoadingMessage.vue'
  import PageDescription from '@/components/03_sections/shared/PageDescription.vue'
  import ChordToneList from '@/components/03_sections/chord/ChordToneList.vue'
  import KeyboardDiagram from '@/components/03_sections/shared/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/03_sections/shared/FretboardDiagram.vue'
  import ChordPositionList from '@/components/03_sections/chord/ChordPositionList.vue'
  import BackwardLink from '@/components/03_sections/shared/BackwardLink.vue'
  import NotFoundMessage from '@/components/03_sections/shared/NotFoundMessage.vue'
  import FetchErrorMessage from '@/components/03_sections/shared/FetchErrorMessage.vue'
  import type { ChordDetails } from '@/types/interfaces'
  import { chordKey, tonesKey } from '@/types/injectionKeys'
  import { fetchChord } from '@/utils/fetch'
  import { setMetaTitle } from '@/utils/handleTag'

  const route = useRoute()
  const chordParam = route.params.chord as string
  const rootParam = route.query.root as string

  const chord = ref<ChordDetails>({ name: '', description: '', tones: [], positions: [] })
  const loading = ref(true)
  const error = ref(false)
  const invalidParam = ref(false)

  const fetchData = async() => {
    try {
      chord.value = await fetchChord(chordParam, rootParam)
      setMetaTitle(chord.value.name.split(',')[0])
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

  provide(chordKey, chord)
  provide(tonesKey, computed(() => chord.value.tones))

  const linkInfo = { path: '/chords', title: 'コード一覧' }
</script>

<template>
  <template v-if="loading">
    <LoadingMessage />
  </template>
  <template v-else-if="!error">
    <div class="text-center">
      <h1>{{ chord.name.split(',')[0] }}</h1>
      <span>{{ chord.name.split(',')[1] }}</span>
    </div>
    <PageDescription :text="chord.description" />
    <ChordToneList />
    <KeyboardDiagram />
    <FretboardDiagram />
    <ChordPositionList />
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
  span {
    color: var(--text-secondary-color);
    font-size: 1.125rem;
  }

  @media screen and (max-width: 767px) {
    span {
      font-size: 0.875rem;
    }
  }
</style>
