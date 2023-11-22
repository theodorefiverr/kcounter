<template>
  <div>
    <ModalWrapper @close="close">
      <template #header>
        <p class="text-center text-2xl font-semibold w-full">
          Report a discrepancy
        </p>
      </template>
      <app-input
        v-model="q1"
        name="company"
        type="text"
        label="What do you think the count should have been? It's OK if you only have a rough approximation."
        class="text-field-3 w-input focus:outline-0 border-none px-4"
        placeholder=""
        :disabled="true"
        required
      ></app-input>
      <app-textarea
        v-model="q2"
        name="company"
        type="text"
        label="Do you have any other comments?"
        class="text-field-3 w-input focus:outline-0 border-none"
        placeholder=""
        :disabled="true"
        required
      ></app-textarea>
      <app-button @click="proceed" :loading="!true"> Proceed</app-button>
    </ModalWrapper>
  </div>
</template>

<script setup lang="ts">
import { modal } from "./";
import { onUnmounted, ref } from "vue";
import ModalWrapper from "@/components/common/modal/ModalWrapper.vue";
import { uploadFile } from "@/utils/firebase/storage";
import { useCounterStore } from "@/stores/counter";

const loading = ref(false);
const counterStore = useCounterStore();
const q1 = ref("");
const q2 = ref("");
const proceed = () => {};
const close = () => {
  modal.value?.hide();
};
const upload = async () => {
  loading.value = true;
  if (counterStore.formValues.image_file) {
    const value = (
      await uploadFile(
        new Date() + "",
        "report",
        counterStore.formValues.image_file
      )
    ).url;
    loading.value = false;
    console.log({ value });
  }
};

onUnmounted(() => {
  modal.value?.hide();
});
</script>

<style scoped></style>
