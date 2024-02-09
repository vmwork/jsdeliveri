<template>
  <div class="text-center">
    <v-dialog v-model="isActive" activator="parent" width="auto">
      <v-card
        class="mx-auto"
        max-width="344"
        :title="packedgeData.name"
        :prepend-avatar="'../../' + packedgeData.type + '.webp'"
        @click="togleModal(packedgeData)"
      >
        <v-card-text>{{ packedgeData.hits }}</v-card-text>
        <v-card-text>{{ packedgeData.bandwidth }}</v-card-text>
        <v-card-text>{{ packedgeData.links.self }}</v-card-text>
        <v-card-text>{{ packedgeData.links.versions }}</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import useModalActivator from "../../composables/useModalActivator";
const { isActive, togleModal, packedgeData } = useModalActivator();
</script>
