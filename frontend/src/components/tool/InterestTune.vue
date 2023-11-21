<template>
  <div>
    <span
    v-for="(tune,idx) in tunes"
      :key="idx"
      :id="tune"
      class="inline-flex items-center rounded-full px-4 py-1 my-1 mr-2 text-sm font-medium cursor-pointer"
      :class="toolStore.tone==tune?active:normal"
      @click="chooseTune(tune)"
    >
      {{ tune }}

      <button
      v-if="toolStore.tone==tune"
        type="button"
        class="inline-flex items-center p-0.5 ml-2 text-sm text-white bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
        
      >
        <svg
          style="height: 20px"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          ></path>
        </svg>
      </button>
    </span>
  </div>
</template>

<script setup lang="ts">

import { useToolStore } from "@/stores/tool";
const toolStore = useToolStore();

const chooseTune = (value:string) => toolStore.tone=value; 
const normal = 'text-[#bc49d3]  bg-[#fae8fd] hover:border hover:border-[#bc49d3]';
const active = 'text-white bg-[#bc49d3]';
const tunes = [
"Professional",
"Analytical",
"Formal",
"Informal",
"Witty",
"Academic",
"Persuasive",
"Friendly",
"Funny",
]
</script>

<style scoped></style>
