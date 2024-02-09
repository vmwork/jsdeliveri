<template>
  <v-main>
    <v-container class="pt-0 h-screen d-flex flex-column justify-space-between">
      <div>
        <AppHeader />
        <router-view />
      </div>
      <AppFooter class="ma-auto" />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import useGetPackedges from "../../composables/useGetPackedges";
const { getTopPackedges } = useGetPackedges();

onBeforeMount(async () => {
  await getTopPackedges();
});
</script>
