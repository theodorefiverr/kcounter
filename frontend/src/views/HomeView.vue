<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <h1 class="text-4xl text-center mb-10" style="color: #bc49d3">
      Ki-67 counter
    </h1>

    <step-bar :current-step="counterStore.currentStep"></step-bar>

    <counter-form v-if="counterStore.currentStep == 1" />
    <result-view v-else />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import CounterForm from "@/components/counter/CounterForm.vue";
import ResultView from "@/components/counter/ResultView.vue";
import StepBar from "@/components/counter/StepBar.vue";
import { onMounted } from "vue";
import { logEvent } from "firebase/analytics";
import { analytics } from "@/utils/firebase";
const counterStore = useCounterStore();
onMounted(()=>{
  logEvent(analytics, 'page_view', {
  page_path: '/', // dynamically set this based on the user's navigation
});
})
</script>
