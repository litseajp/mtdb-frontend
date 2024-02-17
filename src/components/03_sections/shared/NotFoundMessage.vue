<script setup lang="ts">
  import { onMounted } from 'vue'
  import { setMetaTitle } from '@/utils/handleTag'

  onMounted(() => setMetaTitle('404 Not Found'))
</script>

<template>
  <section id="not-found-message" class="text-center">
    <h1>404 Not Found</h1>
    <p>
      ページが見つかりませんでした。
    </p>
  </section>
</template>

<style scoped>
  p {
    margin: 42px 0 72px 0;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 767px) {
    p {
      margin: 24px 0 48px 0;
      font-size: 1.125rem;
    }
  }
</style>
