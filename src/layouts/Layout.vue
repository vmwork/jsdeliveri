<template>
  <v-container class="pt-0">
    <Appheader />
  </v-container>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import useGetPackedges from "../../composables/useGetPackedges";
const { getTopPackedges } = useGetPackedges();

onBeforeMount(async () => {
  await getTopPackedges();
});
</script>
