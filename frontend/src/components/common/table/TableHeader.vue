<script setup lang="ts">
const props = defineProps<{ tableItems: Array<string>, checkbox?:boolean }>()

</script>

<template>
    <thead class="text-sm selection: bg-primary text-white">
        <tr>
            <th v-if="props.checkbox" scope="col" class="px-6 py-3">
                <input type="checkbox"
                    class="border-2 border-white bg-primary checked:border-white checked:outline-transparent focus:outline-transparent">
            </th>
            <template v-for="(header, idx) in props.tableItems">
                <th v-if="header !== 'id'" :key="idx" scope="col" class="px-3 py-3 font-medium">
                    {{ header }}
                </th>
            </template>
            <th scope="col" class="px-6 py-3 font-medium">
                <slot name="actions"></slot>
            </th>
        </tr>
    </thead>
</template>