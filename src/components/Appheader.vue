<template>
  <div class="app-header d-flex">
    <v-row
      class="mb-10 bg-grey-darken-4"
      no-gutters
      align="start"
      style="height: 60px"
    >
      <v-col cols="3">
        <router-link to="/">
          <v-sheet class="mt-4 bg-grey-darken-4">
            <v-responsive class="mx-auto mr-4">
              <v-img
                src="../../public/jsdelivr-horizontal-white.svg"
                height="56"
              />
            </v-responsive>
          </v-sheet>
        </router-link>
      </v-col>
      <v-col>
        <v-sheet class="mt-4">
          <v-responsive class="mx-auto">
            <v-text-field
              :loading="loading"
              v-model="querry"
              label="Search"
              hide-details="auto"
              append-inner-icon="mdi-magnify"
              @click:append-inner="getPac"
              @keyup.enter="getPac"
            >
              <template v-slot:loader>
                <v-progress-linear
                  :active="loading"
                  :model-value="60"
                  color="success"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
            </v-text-field>
          </v-responsive>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useGetPackedges from "../../composables/useGetPackedges";
const { getPackedge, loading } = useGetPackedges();
const querry = ref("");
const getPac = () => {
  getPackedge(querry.value);

  querry.value = "";
};
</script>
