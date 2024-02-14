<script setup lang="ts">
  import { onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import AppHeader from '@/components/01_layouts/AppHeader.vue'
  import AppMain from '@/components/01_layouts/AppMain.vue'
  import AppFooter from '@/components/01_layouts/AppFooter.vue'
  import { setMetaTitle } from '@/utils/handleTag'

  const route = useRoute()

  const setTitle = () => {
    const title = route.meta.title as string
    setMetaTitle(title)
  }

  onMounted(setTitle)

  watch(route, setTitle)
</script>

<template>
  <v-app>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </v-app>
</template>

<style scoped>
</style>
