<script setup lang="ts">
  import KeyListItem from './KeyListItem.vue'
  import type { KeyCategory }  from '@/types/interfaces'

  defineProps<{ keyCategory: KeyCategory }>()
</script>

<template>
  <div class="key-list">
    <h2>{{ keyCategory.category }}</h2>
    <v-row class="ma-0 mt-2">
      <v-col v-for="key in keyCategory.keys" :key="key.name" cols="4" class="px-1 py-2">
        <KeyListItem :key-data="key" />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
</style>
