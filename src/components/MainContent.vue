<template>
  <div>
    <Packedge-card />
    <v-card
      v-if="pack"
      class="mx-auto mb-10"
      :title="pack.name"
      :prepend-avatar="'../../' + pack.type + '.webp'"
    >
      <v-card-text>{{ pack.tags.latest }}</v-card-text>
    </v-card>
    <h1 class="d-flex justify-center pb-10">
      The most popular packages on this week
    </h1>

    <v-row>
      <v-col v-for="pakage in pakages" :key="pakage.name">
        <v-card
          class="mx-auto"
          max-width="350"
          min-width="350"
          min-height="200"
          :title="pakage.name"
          :prepend-avatar="'../../' + pakage.type + '.webp'"
          @click="openModal(pakage)"
        >
          <div class="card pl-4">
            <div class="d-flex align-center">
              <v-icon size="large" color="yellow" icon="mdi-star"></v-icon>
              <v-card-text>Hits: {{ pakage.hits }}</v-card-text>
            </div>
            <div class="d-flex align-center">
              <v-icon
                size="large"
                color="black"
                icon="mdi-cloud-download"
              ></v-icon>

              <v-card-text>Bandwidth: {{ pakage.bandwidth }}</v-card-text>
            </div>
          </div>
          <Loader v-if="loading" />
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-10">
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
const { pakages, paginationLimit, pack, getTopPackedges, loading } =
  useGetPackedges();
const { openModal } = useModalActivator();

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
