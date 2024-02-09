import { ref } from "vue";
import type { Ipackadge } from "../models/IPackadge";
const pakages = ref();
const pack = ref<Ipackadge>();
const loading = ref(false);
const paginationLimit = ref(10);
export default () => {
  const stapLoading = () => {
    loading.value = false;
  };
  const getTopPackedges = async (page = 1) => {
    const path = "stats/packages";
    const period = "week";
    const limit = "12";
    loading.value = true;
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API
        }${path}?period=${period}&limit=${limit}&page=${page}`
      );
      if (response.status === 200) {
        const result = await response.json();
        pakages.value = result;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(stapLoading, 500);
    }
  };

  const getPackedge = async (querry: string) => {
    loading.value = true;
    const path = `packages/npm/${querry}`;
    try {
      const response = await fetch(`${import.meta.env.VITE_API}${path}`);
      if (response.status === 200) {
        const result = await response.json();
        pack.value = result;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(stapLoading, 500);
    }
  };

  return {
    loading,
    paginationLimit,
    pack,
    pakages,
    getTopPackedges,
    getPackedge,
  };
};
