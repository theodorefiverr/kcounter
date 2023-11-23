<template>
  <div>
    <ModalWrapper @close="close">
      <template #header>
        <p class="text-center text-2xl font-semibold w-full">
          Report a discrepancy
        </p>
      </template>
      <form @submit.prevent="proceed">
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
        <app-button :loading="loading"> Proceed</app-button>
      </form>
    </ModalWrapper>
  </div>
</template>

<script setup lang="ts">
import { modal } from "./";
import { onUnmounted, ref } from "vue";
import ModalWrapper from "@/components/common/modal/ModalWrapper.vue";
import { uploadFile } from "@/utils/firebase/storage";
import { useCounterStore } from "@/stores/counter";
import { postReq } from "@/utils/axios";
import { notify } from "@/utils/notify";

const loading = ref(false);
const counterStore = useCounterStore();
const q1 = ref("");
const q2 = ref("");

const proceed = async () => {
  if (!q1.value || !q2.value) {
    return;
  }
  const imageUrl = await upload();
  const bb = JSON.stringify({
    pCount: q1.value + "%",
    aCount:
      Math.ceil((counterStore.counterData?.data?.count ?? 0) * 100) / 100 + "%",
    image: imageUrl,
    comment: q2.value,
    // recipient: "aaishah.raquib@gmail.com",
    subject: "New Ki67 Feedback",
  });
  loading.value = true;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  loading.value = true;
  postReq({
    url: "https://script.google.com/macros/s/AKfycbzGwY2UKd9v2zyYo1bbnGcbDBNSV7jNpXfnu9TdLmplEZ7RVHF_wfNz8Aftm_UxYLqd/exec",
    body: bb,
    result: ({ data }) => {
      loading.value = !loading.value;

      console.log({ data });
      close();
      // alert(JSON.stringify(data));
    },
    error: (err) => {
      console.log({ err });
      alert("an error occured");
    },
    onFinally: () => {
      loading.value = !loading.value;
    },
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
    return value;
  }
};

onUnmounted(() => {
  modal.value?.hide();
});
</script>

<style scoped></style>
