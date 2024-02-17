<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useDisplay } from 'vuetify'
  import { tonicNoteListSharp, tonicNoteListFlat } from '@/constants/noteLists'
  import { formatNote } from '@/utils/format'

  defineProps<{ path: string }>()

  const { mdAndUp, lgAndUp } = useDisplay()

  const sharpMode = ref(true)
  const tonicNotes = computed(() => sharpMode.value ? tonicNoteListSharp : tonicNoteListFlat)

  const toggleMode = () => {
    sharpMode.value = !sharpMode.value
  }
</script>

<template>
  <div class="tonic-selector">
    <v-btn-toggle divided variant="outlined" class="overflow-x-auto">
      <v-btn v-for="tonic in tonicNotes" :key="tonic" :to="`${path}?${path.includes('scale') ? 'tonic' : 'root'}=${tonic}`">
        {{ formatNote(tonic) }}
      </v-btn>
    </v-btn-toggle>
    <div :class="lgAndUp ? 'ml-8' : 'mt-2'">
      <v-btn variant="outlined" :height="mdAndUp ? 48 : 32" @click="toggleMode">
        <span class="px-2">
          <v-icon icon="mdi-swap-horizontal" />
          {{ sharpMode ? '♭系に切り替え' : '♯系に切り替え' }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
  .tonic-selector {
    display: flex;
    align-items: center;
  }

  .v-btn {
    min-width: 48px;
    padding: 0;
  }

  .v-btn--variant-outlined {
    border: thin solid rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: 959px) {
    .tonic-selector {
      display: block;
    }
  }

  @media screen and (max-width: 767px) {
    .v-btn-group--density-default.v-btn-group {
      height: 36px;
    }

    .v-btn {
      min-width: 36px;
    }
  }
</style>
