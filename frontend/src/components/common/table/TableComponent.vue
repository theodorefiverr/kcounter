<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{ tableItems: Array<any>  }>()

const paginatedItems = ref(props.tableItems);

</script>

<template>
    <div class="w-full mt-5 bg-white p-5 sm:rounded-lg ">
        <div class="relative ">
            <table class="w-full text-sm text-left">
                <slot name="nav"/>

                <slot name="tableHeader"/>

                <div v-if="!paginatedItems.length" class="flex justify-center items-center">
                    <p>No record found...</p>
                </div>

                <tbody v-else >
                    <slot/>
                </tbody>
            </table>
        </div>
        <!-- Pagination buttons -->
        <slot name="tableFooter"/>
    </div>

    <!-- <driver-profile /> -->
</template>