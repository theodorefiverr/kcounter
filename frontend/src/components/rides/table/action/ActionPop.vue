<script lang="ts" setup>
// const emit = defineEmits<{ (e: "view"): void , (e:"delete"):void}>()
</script>

<template>
    <div class="w-60 h-full py-2 bg-white rounded-lg flex-col justify-start items-start gap-1 inline-flex">
        <div class="flex-col justify-start items-start flex">
            <slot/>
        </div>
    </div>
</template>



