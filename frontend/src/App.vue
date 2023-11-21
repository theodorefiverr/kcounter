<script setup lang="ts">
import LoadingAni from "./components/tool/LoadingAni.vue";
import { onMounted } from 'vue'
import { useAppStore } from "./stores/app";
import { 
    // initAccordions, 
    // initCarousels, 
    // initCollapses, 
    // initDials, 
    // initDismisses, 
    // initDrawers, 
    // initDropdowns, 
    // initModals, 
    // initPopovers, 
    // initTabs, 
    initTooltips } from 'flowbite'
const appStore = useAppStore();
onMounted(() => {
    // initAccordions();
    // initCarousels();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    // initDropdowns();
    // initModals();
    // initPopovers();
    // initTabs();
    initTooltips();
})


</script>

<template>
  <div class="tool-box">
    <div class="div-block-38">
<loading-ani v-if="appStore.isLoading"/>
       <router-view v-else />
    </div>
    
  </div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

*{
  font-family: "Satoshi-Bold", serif;
}

.tool-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.div-block-38 {
  max-width: 800px;
  margin-right: 10px;
  margin-left: 15px;
}

.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>