<template>
  <div class="max-w-4xl">
    <FeedBackModal ref="feedBackRef">
      <FeedBack />
    </FeedBackModal>
    <div class="border border-gray-500 border-dashed p-12 my-2">
      <div class="mb-3 text-center gap-1">
        <span>
          Below are the images that we generated to separate the different cell
          types. Please review the images to make sure that we correctly
          classified Ki-67 positive versus negative cells. If they look wrong,
          you may optionally.
        </span>
        <button
          @click="showModal"
          class="pr-1 font-semibold text-primary underline"
        >
          click here
        </button>
        <span
          >to report a discrepancy so that we can fix it for the next
          version.</span
        >
      </div>

      <div>
        <p class="font-bold text-6xl text-primary text-center my-5">
          {{
            result>95?">95":result
          }}%
        </p>
      </div>

      <div
        class="grid md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center"
      >
        <div>
          <img
            :src="baseUrl + counterStore.counterData?.data.output1"
            class="rounded-lg"
            alt="sample"
          />
          <p class="font-semibold mb-3 text-center">Ki67 positive</p>
        </div>
        <div>
          <img
            :src="baseUrl + counterStore.counterData?.data.output2"
            class="rounded-lg"
            alt="sample"
          />
          <p class="font-semibold mb-3 text-center">Ki67 Negative</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import FeedBackModal from "@/components/counter/FeedBackModal.vue";
import FeedBack from "./FeedBack.vue";
import { useCounterStore } from "@/stores/counter";
import { baseUrl } from "@/utils/axios";
const counterStore = useCounterStore();
const feedBackRef = ref(null);
const feedback = () => {
  console.log("hehe");
};

const showModal = () => {
  if (feedBackRef.value) {
    (feedBackRef.value as { show: () => void }).show();
  }
};

const result = computed(() => {
  return Math.ceil((counterStore.counterData?.data?.count ?? 0) * 100) / 100;
});
</script>

<style scoped></style>
