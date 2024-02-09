import { ref } from "vue";
// import Ipackadge from "@/models/IPackadge";
interface Ilinks {
  self: string;
  bandwidth: string;
}

export interface Ipackadge {
  type: string;
  name: string;
  hits: string;
  bandwidth: number;
  prev?: Array;
  links: Array<Ilinks>;
}
const pakedges = ref(<Ipackadge>[]);
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
    const limit = "10";
    loading.value = true;
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API
        }${path}?period=${period}&limit=${limit}&page=${page}`
      );
      if (response.status === 200 || response.status === "200") {
        const result = await response.json();
        console.log(result);
        pakedges.value = result;
        // paginationLimit.value = pakedges.value.length / +limit;
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
      if (response.status === 200 || response.status === "200") {
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
    pakedges,
    getTopPackedges,
    getPackedge,
  };
};
