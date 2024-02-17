<script setup lang="ts">
  import { ref } from 'vue'
  import ToolNavigation from '@/components/04_parts/layouts/ToolNavigation.vue'
  import NavigationDrawer from '@/components/04_parts/layouts/NavigationDrawer.vue'
  import { useDisplay } from 'vuetify'

  const { smAndDown } = useDisplay()

  const drawer = ref(false)
</script>

<template>
  <v-app-bar border flat :height="smAndDown ? 50 : 60">
    <div id="app-bar-container" class="mx-auto">
      <v-app-bar-nav-icon v-if="smAndDown" @click.stop="drawer = !drawer" class="ml-1" />
      <router-link id="app-bar-logo" to="/">
        MusicTheoryDB
      </router-link>
      <template v-if="!smAndDown">
        <ToolNavigation />
      </template>
    </div>
  </v-app-bar>
  <NavigationDrawer :drawer="drawer" />
</template>

<style scoped>
  #app-bar-container {
    width: 100%;
    max-width: 960px;
    display: flex;
  }

  #app-bar-logo {
    margin-left: 16px;
    color: var(--logo-color);
    font-family: "Khand", sans-serif;
    font-size: 36px;
    line-height: normal;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    #app-bar-logo {
      margin-left: 6px;
      font-size: 30px;
    }

    .v-btn--icon {
      border-radius: 20%;
    }
  }
</style>
