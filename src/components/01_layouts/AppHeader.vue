<script setup lang="ts">
  import ToolNavigation from '@/components/04_parts/layouts/ToolNavigation.vue'
</script>

<template>
  <v-app-bar absolute border flat height="60">
    <div id="app-bar-container" class="mx-auto">
      <router-link id="app-bar-logo" to="/" class="ml-4">
        MusicTheoryDB
      </router-link>
      <ToolNavigation />
    </div>
  </v-app-bar>
</template>

<style scoped>
  #app-bar-container {
    width: 100%;
    max-width: 960px;
    display: flex;
  }

  #app-bar-logo {
    color: var(--logo-color);
    font-family: "Khand", sans-serif;
    font-size: 36px;
    text-decoration: none;
  }
</style>
