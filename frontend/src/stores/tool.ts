import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { CoverRes } from "@/@types/coverRes";
interface FormValues {
  image?: File;
  threehold?: string;
}

export const useToolStore = defineStore("Tool", () => {
  const tone = ref("Professional");
  const formValues = ref<FormValues>({});
  const resultValues = ref<CoverRes>();
  const formData = computed(() => {
    let form_data = new FormData();
    form_data.append("image", formValues.value.image!);
    return form_data;
  });
  return { formValues, formData, resultValues, tone };
});
