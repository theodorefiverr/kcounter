<template>
   <li>
        <router-link :to="to" class="flex items-center p-4 mr-4" :class="isActive?'bg-primary text-white rounded-lg':' text-appBlack'">
           <img v-if="icon" :src="isActive?activeIcon?activeIcon:icon:icon" alt="dashboard" class="sidebar-icon">
           <slot v-else name="right"></slot>
         <span v-if="!collapsed" class="flex flex-1 ml-3 whitespace-nowrap">{{name}}</span>
         <slot name="left"></slot>
        </router-link>
     </li>
</template>

<script setup lang="ts">import { initFlowbite } from 'flowbite';
import { computed, onMounted } from 'vue';
import { RouterLink , useRouter} from 'vue-router';
import { collapsed } from './state'
const router = useRouter()
const props=defineProps<{
   to:string,
   name:string,
   icon?:string,
   activeIcon?:string,
   active?:boolean,
}>()

const isActive = computed(()=> props.active ?? router.currentRoute.value.path==props.to)
onMounted(() => {
  initFlowbite()
})
</script>

<style scoped>

</style>