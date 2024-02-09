import { ref } from "vue";
import type { Ipackadge } from "../models/IPackadge";
const isActive = ref(false);
const packedgeData = ref();
export default () => {
  const openModal = (data: Ipackadge) => {
    isActive.value = true;
    packedgeData.value = data;
  };
  const closeModal = () => {
    isActive.value = false;
  };
  return { openModal, closeModal, isActive, packedgeData };
};
