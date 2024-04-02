<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import toolList from '@/constants/toolList'

  const route = useRoute()
</script>

<template>
  <div id="tool-navigation">
    <router-link
      v-for="(tool, index) in toolList" :key="tool.path" :to="tool.path"
      :class="{ 'current-tool': route.path.includes(tool.path), 'ml-6': index !== 0 }"
    >
      {{ tool.name }}
    </router-link>
  </div>
</template>

<style scoped>
  #tool-navigation {
    height: inherit;
    margin-left: 24px;
    display: flex;
    align-items: center;
  }

  a {
    color: #b0b0b5;
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover, a.current-tool {
    color: var(--text-primary-color);
  }

  @media screen and (max-width: 959px) {
    a {
      font-size: 1rem;
    }
  }
</style>
