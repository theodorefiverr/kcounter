<template>
  <div style="height:50vh" ref="anim"></div>
  <h2 v-if="appStore.isLoadingText" class="framer-text blink_me"> 

    {{ appStore.isLoadingText }}
          </h2>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import LottieAnimation from 'lottie-web'
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
let anim = ref(null);   


onMounted(() => {
  console.log(anim.value);
  LottieAnimation.loadAnimation({
  container:anim.value!, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "./LoaderCV.json" // the path to the animation json
});
})
</script>

<style scoped>

.framer-text{
   color: rgb(209, 18, 190) !important ;
   font-family: "Satoshi-Bold", serif;
   font-size: 30px;
   font-style: normal;
   font-weight: 400;
   letter-spacing: -1px;
   line-height: 1.1em;
   text-decoration: none;
   text-transform: none;
   text-align: center;
   margin-top: -200px;
}


</style>
