<script setup lang="ts">
import { ref, computed } from 'vue';

import _ from 'lodash';

const props = defineProps<{ tableItems: Array<any>, itemsPerPage: number, class?: string,  }>()

const itemsPerPage = ref(props.itemsPerPage);
const currentPage = ref(1);
const items = ref<Array<any>>(props.tableItems);
const sortKey = ref('');
const sortDirection = ref('');

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage.value));
const entriesStartIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const entriesEndIndex = computed(() => Math.min(currentPage.value * itemsPerPage.value, items.value.length));
const sortedItems = computed(() => {
    const clonedItems = _.cloneDeep(items.value);
    if (sortKey.value) {
        clonedItems.sort((a, b) => {
            const valueA = a[sortKey.value];
            const valueB = b[sortKey.value];
            if (valueA < valueB) return sortDirection.value === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortDirection.value === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return clonedItems;
});
const paginatedItems = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return sortedItems.value.slice(startIndex, endIndex);
});



const setCurrentPage = (page: number) => currentPage.value = page;
const setSort = (key: string) => {
    console.log('sorted');
    if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortKey.value = key;
        sortDirection.value = 'asc';
    }
    currentPage.value = 1;
}

</script>

<template>
    <div class=" w-full mt-5">
        <div class="relative overflow-x-auto sm:rounded-lg">
            <table class="w-full text-sm text-left">

                <slot></slot>

                <thead class="text-sm selection: bg-primary text-white">
                    <tr>
                        <th  scope="col" class="px-6 py-3">
                            <input type="checkbox"
                                class="border-2 border-white bg-primary checked:border-white checked:outline-transparent focus:outline-transparent">
                        </th>
                        <template v-for="(header, idx) in Object.keys(paginatedItems[0])">
                            <th v-if="header !== 'id'" :key="idx" scope="col" class="px-3 py-3 font-medium">
                                {{ header }}
                            </th>
                        </template>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Actions
                        </th>
                    </tr>
                </thead>

                <div v-if="!paginatedItems.length" class="flex justify-center items-center">
                    <p>No record found...</p>
                </div>

                <tbody v-else>
                    <tr v-for="item in paginatedItems" :key="item.id"
                        class="bg-white even:bg-blue-100 text-black font-medium">
                        <td class="px-6 py-3">
                            <input type="checkbox"
                                class="border-2 border-gray-400 checked:border-primary checked:bg-blue-300">
                        </td>
                        <template v-for="(v, idx) in Object.keys(paginatedItems[0])">
                            <td class="px-3 py-4" :key="idx" v-if="idx !== 0">
                                {{ item[v] }}
                            </td>
                        </template>
                        <td class="relative px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <!-- <options /> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Pagination buttons -->
        <div class="flex justify-between items-center px-5 mt-5 text-sm text-[#6C757D]">
            <p>
                Showing {{ entriesStartIndex }} to {{ entriesEndIndex }} of {{ items.length }} entries
            </p>
            <div>
                <span class="mr-5">Display &nbsp;
                    <input type="number" class="w-[100.75px] h-[30px] text-sm" v-model="itemsPerPage" />
                </span>
                <button class="page-arrow pagination-btn transition" :disabled="currentPage === 1"
                    @click="setCurrentPage(currentPage - 1)">
                    &LeftArrow;
                </button>
                <button v-for="page in totalPages" :key="page" @click="setCurrentPage(page)" class="pagination-btn"
                    :class="page === currentPage ? 'bg-primary text-white' : ''">
                    {{ page }}
                </button>
                <button class="page-arrow pagination-btn" :disabled="currentPage === totalPages"
                    @click="setCurrentPage(currentPage + 1)">
                    &RightArrow;
                </button>
            </div>
        </div>
    </div>

    <!-- <driver-profile /> -->
</template>