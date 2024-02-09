<template>
  <div class="text-center">
    <v-dialog v-model="isActive" activator="parent" width="auto">
      <v-card
        class="mx-auto pa-10"
        mim-width="365"
        :title="packedgeData.name"
        :prepend-avatar="'../../' + packedgeData.type + '.webp'"
      >
        <div class="d-flex align-center">
          <v-icon size="large" color="yellow" icon="mdi-star"></v-icon>
          <v-card-text>Hits: {{ packedgeData.hits }}</v-card-text>
        </div>
        <div class="d-flex align-center">
          <v-icon size="large" color="black" icon="mdi-cloud-download"></v-icon>

          <v-card-text>Bandwidth: {{ packedgeData.bandwidth }}</v-card-text>
        </div>
        <a :href="packedgeData.links.self" target="_blank">Link my self</a>
        <a :href="packedgeData.links.versions" target="_blank"
          >Check versions
        </a>

        <v-btn class="mt-10" block @click="closeModal">Close </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import useModalActivator from "../../composables/useModalActivator";
const { isActive, closeModal, packedgeData } = useModalActivator();
</script>
