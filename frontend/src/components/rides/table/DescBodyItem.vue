<template>
    <div class="w-8 h-8">

 
    <div v-if="type.includes('wallet') && type.includes('top')" class="w-6 h-6  rounded-full flex justify-center text-white items-center bg-[#008A58]">
        <app-icon icon="ph:arrow-down-fill" class="rotate-45"/>
    </div>
    <div v-if="type.includes('wallet') && type.includes('with')" class="w-6 h-6  rounded-full flex justify-center text-white items-center bg-[#BB0202]">
        <app-icon icon="ph:arrow-up-fill" class="rotate-45"/>
    </div>
    <div v-if="type.includes('airtime')" class="w-6 h-6  rounded-full flex justify-center text-white items-center bg-[#6C56F9]">
        <app-icon icon="eva:smartphone-fill"  />
    </div>
    <div v-if="type.includes('data')" class="w-6 h-6  rounded-full flex justify-center text-white items-center bg-[#2684FC]">
        <app-icon icon="wpf:online"  />
    </div>
    <div v-if="type.includes('bill')" class="w-6 h-6  rounded-full flex justify-center text-white items-center bg-[#BB0202]">
        <app-icon icon="solar:bill-list-bold"  />
    </div>
</div>
</template>

<script setup lang="ts">
defineProps<{
    type: string,
}>()
</script>

<style scoped>

</style>