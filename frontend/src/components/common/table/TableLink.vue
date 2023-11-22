<script setup lang="ts">
const props = defineProps<{ active?: boolean, bgColor: string, textColor: string, lineColor: string, text: string, handleSort?: Function }>();
</script>

<template>
    <div>
        <div class="inline-flex space-x-1 items-center justify-end">
            <p class="text-sm text-gray-500" @click="() => handleSort">{{ text }}</p>
            <div>
                <div class="flex items-center justify-center flex-1 h-full p-2  rounded" :class="bgColor">
                    <p class="text-xs font-semibold leading-3" :class="textColor">1000</p>
                </div>
            </div>
        </div>
        <div v-if="active" class="mt-3 h-[1px]" :class="lineColor"></div>
    </div>
</template>