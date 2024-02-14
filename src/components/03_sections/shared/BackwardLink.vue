<script setup lang="ts">
  interface Props {
    linkInfo?: {
      path: string
      title: string
    }
  }

  withDefaults(defineProps<Props>(), {
    linkInfo: () => ({
      path: '/',
      title: 'トップページ'
    })
  })
</script>

<template>
  <section id="backward-link" class="mt-12 text-center">
    <router-link :to="linkInfo.path">
      {{ linkInfo.title }}へ戻る
    </router-link>
  </section>
</template>

<style scoped>
  a {
    color: var(--text-primary-color);
    font-size: 1.125rem;
  }
</style>
