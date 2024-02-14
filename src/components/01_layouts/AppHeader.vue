<script setup lang="ts">
</script>

<template>
  <v-app-bar absolute border flat height="60">
    <div id="app-bar-container" class="mx-auto">
      <a id="app-bar-logo" class="ml-4">
        MusicTheoryDB
      </a>
    </div>
  </v-app-bar>
</template>

<style scoped>
  #app-bar-container {
    width: 100%;
    max-width: 960px;
  }

  #app-bar-logo {
    color: var(--logo-color);
    font-family: "Khand", sans-serif;
    font-size: 36px;
  }
</style>
