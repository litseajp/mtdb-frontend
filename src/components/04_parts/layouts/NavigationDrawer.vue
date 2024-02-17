<script setup lang="ts">
  import { ref, watch } from 'vue'
  import toolList from '@/constants/toolList'

  const props = defineProps<{ drawer: boolean }>()

  const drawer = ref(props.drawer)

  watch(() => props.drawer, () => {
    drawer.value = props.drawer
  })
</script>

<template>
  <v-navigation-drawer v-model="drawer" disable-resize-watcher>
    <v-list>
      <v-list-item v-for="tool in toolList" :key="tool.path" :to="tool.path">
        {{ tool.name }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
  a {
    color: var(--text-primary-color);
  }
</style>
