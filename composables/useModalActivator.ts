import { ref } from "vue";
const isActive = ref(false);
const packedgeData = ref([]);
export default () => {
  const togleModal = (data) => {
    isActive.value = !isActive.value;
    packedgeData.value = data;
  };
  return { togleModal, isActive, packedgeData };
};
