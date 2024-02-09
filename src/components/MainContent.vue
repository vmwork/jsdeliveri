<template>
  <div>
    <Packedge-card :packedge-data="packedgeData" />
    <div class="d-flex justify-center pb-10">
      The most popular packages on this week
    </div>
    <v-card
      v-if="pack"
      class="mx-auto mb-10"
      :title="pack.name"
      :prepend-avatar="'../../' + pack.type + '.webp'"
    >
      <v-card-text>{{ pack.tags.latest }}</v-card-text>
      <!-- <v-card-text>{{ pack.links.stats }}</v-card-text>
      <v-card-text>{{ pack.links.self }}</v-card-text>
      <v-card-text>{{ pack.links.versions }}</v-card-text>
      <v-card-text>{{ pack.links.latest }}</v-card-text> -->
    </v-card>
    <v-row>
      <v-col
        v-for="pakedge in pakedges"
        :key="pakedge.name"
        class="d-flex child-flex"
        cols="3"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          :title="pakedge.name"
          :prepend-avatar="'../../' + pakedge.type + '.webp'"
          @click="togleModal(pakedge)"
        >
          <!-- <v-card-text>{{ pakedge.hits }}</v-card-text>
          <v-card-text>{{ pakedge.bandwidth }}</v-card-text>
          <v-card-text>{{ pakedge.links.self }}</v-card-text>
          <v-card-text>{{ pakedge.links.versions }}</v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <!-- <v-pagination
        v-if="gifs.length > 0 && pagination.count !== pagination.total_count"
        v-model="page"
        :length="paginationLimit"
        @click="paginationEvent"
      ></v-pagination> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import useGetPackedges from "../../composables/useGetPackedges";
import useModalActivator from "../../composables/useModalActivator";
const { pakedges, pack } = useGetPackedges();
const { togleModal } = useModalActivator();
</script>

<style scoped>
.link {
  width: inherit;
}
span {
  color: antiquewhite;
}
</style>
