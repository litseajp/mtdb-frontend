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
  <section id="backward-link" class="text-center">
    <router-link :to="linkInfo.path">
      {{ linkInfo.title }}へ戻る
    </router-link>
  </section>
</template>

<style scoped>
  #backward-link {
    margin-top: 48px;
  }

  a {
    color: var(--text-primary-color);
    font-size: 1.125rem;
  }

  @media screen and (max-width: 767px) {
    #backward-link {
      margin-top: 24px;
    }

    a {
      font-size: 1rem;
    }
  }
</style>
