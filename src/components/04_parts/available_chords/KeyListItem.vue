<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import type { KeyInfo }  from '@/types/interfaces'

  defineProps<{ keyData: KeyInfo }>()

  const { mdAndUp } = useDisplay()
</script>

<template>
  <div class="key-list-item text-center">
    <router-link :to="`/available-chords/${keyData.path}`">
      <div class="key-name">
        {{ keyData.name }}
      </div>
      <div v-if="mdAndUp" class="key-diatonic">
        {{ keyData.diatonic.join(' - ') }}
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  .key-list-item {
    padding: 8px 0;
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-image: linear-gradient(to right, transparent, #ddd 10%, #ddd 90%, transparent 100%) 1;
  }

  .key-list-item:hover {
    background-color: #f5f5f5;
  }

  .key-name {
    color: var(--text-primary-color);
    font-size: 1.25rem;
  }

  .key-diatonic {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
  }

  @media screen and (max-width: 767px) {
    .key-list-item {
      padding: 8px 0;
    }

    .key-name {
      font-size: 1.125rem;
    }
  }
</style>
