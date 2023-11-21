<template>
  <div class="result bg-white p-10 shadow-xl rounded-xl">{{ resultRes?.data.letter }}</div>
  <div class="button-container">
    <button @click="copy" class="button-item w-button text-white" style="background-color: #bc49d3;">
      Copy Cover Letter
    </button>
    <button class="button-item" style="border: 2px dashed #bc49d3; color:#bc49d3" @click="go">
      Try Again
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToolStore } from "@/stores/tool";
import ClipboardJS from "clipboard"

const router = useRouter()
const clone = ref(null)
const toolStore = useToolStore();
const go = () => {
  // toolStore.formValues.job = "";
  router.push('/')
}

const resultRes = toolStore.resultValues;
const copy = () => {
  const textCopied = ClipboardJS.copy(toolStore.resultValues?.data.letter || "");
  console.log('copied!', textCopied);
}
</script>
`

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400&display=swap');

.result {
  font-family: 'Roboto Slab', serif;
}
</style>
