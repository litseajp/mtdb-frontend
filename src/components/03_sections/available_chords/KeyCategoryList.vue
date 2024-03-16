<script setup lang="ts">
  import KeyList from '@/components/04_parts/available_chords/KeyList.vue'
  import type { KeyCategory }  from '@/types/interfaces'

  defineProps<{ keyCategories: KeyCategory[] }>()
</script>

<template>
  <section id="key-category-list">
    <template v-for="keyCategory in keyCategories" :key="keyCategory.category">
      <KeyList :key-category="keyCategory" class="key-list" />
    </template>
  </section>
</template>

<style scoped>
  #key-category-list {
    margin-top: 42px;
  }

  .key-list:not(:first-child) {
    margin-top: 32px;
  }
</style>
