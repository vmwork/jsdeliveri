<template>
  <div>
    <Packedge-card :packedge-data="packedgeData" />
    <h1 class="d-flex justify-center pb-10">
      The most popular packages on this week
    </h1>
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
      <v-col v-for="pakedge in pakedges" :key="pakedge.name" class="" cols="4">
        <v-card
          class="mx-auto"
          max-width="350"
          :title="pakedge.name"
          :prepend-avatar="'../../' + pakedge.type + '.webp'"
          @click="togleModal(pakedge)"
        >
          <div class="card pl-4">
            <div class="d-flex align-center">
              <v-icon size="large" color="yellow" icon="mdi-star"></v-icon>
              <v-card-text>Hits: {{ pakedge.hits }}</v-card-text>
            </div>
            <div class="d-flex align-center">
              <v-icon
                size="large"
                color="black"
                icon="mdi-cloud-download"
              ></v-icon>

              <v-card-text>Bandwidth: {{ pakedge.bandwidth }}</v-card-text>
            </div>

            <!-- <v-card-text>{{ pakedge.links.self }}</v-card-text>
          <v-card-text>{{ pakedge.links.versions }}</v-card-text> -->
          </div>
          <Loader v-if="loading" />
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <v-pagination
        v-model="page"
        :length="paginationLimit"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import useGetPackedges from "../../composables/useGetPackedges";
import useModalActivator from "../../composables/useModalActivator";
const { pakedges, paginationLimit, pack, getTopPackedges, loading } =
  useGetPackedges();
const { togleModal } = useModalActivator();

const page = ref(1);

watch(page, () => {
  console.log(page.value);
  getTopPackedges(page.value);
});
</script>

<style scoped>
.link {
  width: inherit;
}
span {
  color: antiquewhite;
}
.card {
  position: relative;
}
</style>
