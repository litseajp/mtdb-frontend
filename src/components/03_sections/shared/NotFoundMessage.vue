<script setup lang="ts">
  import { onMounted } from 'vue'
  import { setMetaTitle } from '@/utils/handleTag'

  onMounted(() => setMetaTitle('404 Not Found'))
</script>

<template>
  <section id="not-found-message" class="text-center">
    <h1>404 Not Found</h1>
    <p class="mt-8">
      ページが見つかりませんでした。
    </p>
  </section>
</template>

<style scoped>
  p {
    font-size: 1.25rem;
  }
</style>
