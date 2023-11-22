
<script setup lang="ts">
import { initDropdowns , initTooltips } from 'flowbite';
import ComponentHeader from './ComponentHeader.vue';
import { useRoute } from 'vue-router';
import MenuItems from './MenuItems.vue';
import { onMounted } from "vue";
import { toggleHidden} from '@/components/common/SideBar/state'
import {showMenuItems} from './state'
import { useUserStore } from '@/stores/user';
const route = useRoute();
const userStore = useUserStore();

onMounted(()=>{
  initDropdowns()
  initTooltips()
})
</script>
<template>

  <nav class="bg-pink">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
      <button  @click="toggleHidden" type="button" class="inline-flex items-center p-2 mt-2 ml-3 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
     </button>
     

       <span class="text-left text-2xl font-bold leading-loose text-gray-900">{{ route.name }}</span> 
       <span class=" hidden lg:block text-base leading-normal  text-gray-400 font-normal md:w-[400px] lg:w-full">{{ route.meta.desc }}</span> 
      </div>
    <div class="flex items-center md:order-2">
      <component-header  image="https://xsgames.co/randomusers/assets/avatars/male/39.jpg" :username="userStore.user?.displayName"  :tag="userStore.user?.email"/>
        <button v-if="showMenuItems" data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
<menu-items v-if="showMenuItems"></menu-items>
    </div>
  </nav>
</template>



<style scoped>
nav{
  background-color: transparent;
  
}
</style>

