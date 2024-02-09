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
const page = ref("1");
export default () => {
  const getTopPackedges = async () => {
    const path = "stats/packages";
    const period = "week";
    const limit = "10";

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API
        }${path}?period=${period}&limit=${limit}&page${page.value}`
      );
      // if (response.status === 200 || response.status === "200") {
      const result = await response.json();
      pakedges.value = result;

      // }
    } catch (error) {
      console.log(error);
    }
  };

  const getPackedge = async (querry: string) => {
    loading.value = true;
    const path = `packages/npm/${querry}`;
    console.log(querry);

    try {
      const response = await fetch(`${import.meta.env.VITE_API}${path}`);
      if (response.status === 200 || response.status === "200") {
        const result = await response.json();
        console.log(result);
        pack.value = result;
      }
    } catch (error) {
      console.log(error);
    } finally {
      const stapLoading = () => {
        loading.value = false;
      };
      setTimeout(stapLoading, 500);
    }
  };

  return { loading, pack, pakedges, getTopPackedges, getPackedge };
};
