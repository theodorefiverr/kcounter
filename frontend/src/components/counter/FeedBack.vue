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
      <app-button @click="proceed" :loading="loading"> Proceed</app-button>
    </ModalWrapper>
  </div>
</template>

<script setup lang="ts">
import { modal } from "./";
import { onUnmounted, ref } from "vue";
import ModalWrapper from "@/components/common/modal/ModalWrapper.vue";
import { uploadFile } from "@/utils/firebase/storage";
import { useCounterStore } from "@/stores/counter";
import { appPostRaw } from "@/utils/axios";
import { notify } from "@/utils/notify";

const loading = ref(false);
const counterStore = useCounterStore();
const q1 = ref("");
const q2 = ref("");
const proceed = () => {
  loading.value = true;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  appPostRaw({
    url: "https://script.google.com/macros/s/AKfycbzGwY2UKd9v2zyYo1bbnGcbDBNSV7jNpXfnu9TdLmplEZ7RVHF_wfNz8Aftm_UxYLqd/exec",
    body: {
      pCount: "89%",
      aCount: "77%",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cynthiaobasuyi.appspot.com/o/report%2FWed%20Nov%2022%202023%2012%3A42%3A37%20GMT%2B0100%20(West%20Africa%20Standard%20Time)?alt=media&token=0bdfa57c-643c-4234-8469-7e58f3151cb6",
      comment:
        "This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.",
    },
  })
    .then(({ data }) => {
      loading.value = false;
      notify({
        type: data.status ? "success" : "error",
        title: data.message,
      });
    })
    .catch(() => {
      loading.value = false;
      notify({
        type: "error",
        title: "Could not process response",
      });
    });
};
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
