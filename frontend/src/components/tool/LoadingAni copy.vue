<template>
  <div style="height:400px" ref="anim"></div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import LottieAnimation from 'lottie-web'
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

<style scoped></style>
