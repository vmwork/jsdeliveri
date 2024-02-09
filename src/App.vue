<template>
  <v-app class="bg-grey-darken-4">
    <v-main>
      <Layout></Layout>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Layout from "@/layouts/Layout.vue";
</script>
