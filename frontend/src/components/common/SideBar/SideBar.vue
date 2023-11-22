<script setup lang="ts">
import { useRouter } from "vue-router";
import BarItem from "./BarItem.vue"

import { collapsed, toggleSidebar, hidden, toggleHidden, matches } from './state'
const router = useRouter()




</script>
<template>
   <div v-if="!hidden && matches" @click="toggleHidden"
      class="z-20 fixed top-0 left-0 bg-gray-500 opacity-30 w-screen h-screen ">
   </div>
   <aside class="z-40 pl-3 h-screen fixed top-0 left-0 opacity-100 bg-appWhite" :class="hidden ? 'hidden' : ''"
      aria-label="Sidebar">

      <div class="h-full pl-4 py-4 overflow-y-auto">
         <div class="flex mb-12 mt-12">
            <!-- <img v-if="!collapsed" class=" h-8" src="../../../assets/logo.png" alt="" /> -->
            <img  class="h-7" src="../../../assets/logo.png" alt="" />
            <!-- <h1 class="text-2xl font-bold leading-loose text-primary">NeoBank</h1> -->

            <!-- <button class="toggle" @click="toggleSidebar">
               <Icon v-if="!collapsed" icon="material-symbols:arrow-back-rounded" style="display: inline" width="24px"
                  height="24px" />
               <Icon v-else icon="material-symbols:arrow-forward-rounded" style="display: inline" width="24px"
                  height="24px" />
            </button> -->
         </div>
         <ul class="space-y-2 font-medium text-primary">
            <bar-item :to="'/dashboard'" :name="'Dashboard'" :active="router.currentRoute.value.path.includes('dashboard')">
               <template #right>
                  <app-icon icon="iconamoon:category-fill" width="23px" />
               </template>
            </bar-item>
            <bar-item :to="'/drivers'" :name="'Drivers'" :active="router.currentRoute.value.path.includes('driver')">
               <template #right>
                  <app-icon icon="healthicons:truck-driver" width="23px" />
               </template>
            </bar-item>
           <bar-item :to="'/customers'" :name="'Customers'" :active="router.currentRoute.value.path.includes('customer')">
               <template #right>
                  <app-icon icon="clarity:users-line" width="23px" />
               </template>
            </bar-item>
            <bar-item :to="'/rides'" :name="'Rides'" :active="router.currentRoute.value.path.includes('ride')">
               <template #right>
                  <app-icon icon="bx:trip" width="23px" />
               </template>
            </bar-item>
         </ul>
      </div>
   </aside>
</template>

<style scoped>
.toggle {
   position: absolute;
   right: -22px;
   cursor: pointer;
   padding: 5px;
   width: 50px;
   height: 50px;
   border: 0.5px solid #00000010;
   background-color: white;
   border-radius: 9999px;
   box-shadow: 0px 2px 15px rgba(227.18976348638535, 206.26667261123657, 238.00001621246338, 0.5);

}
</style>
<!-- <div class="hidden sm:flex flex-row  h-screen w-full md:w-1/5 lg:1/5 items-center justify-center"> -->