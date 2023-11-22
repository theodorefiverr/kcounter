<script setup lang="ts">
import type { Data } from '@/stores/letter';
import { ref, computed } from 'vue';
const props = defineProps<{ tableItems: Data, itemsPerPage: number, class?: string,  }>()

const itemsPerPage = ref(props.itemsPerPage);
const currentPage = computed(()=>props.tableItems.page)


const totalPages = computed(() => props.tableItems.totalPages);
const totalItems = computed(() => props.tableItems.totalCount);
const entriesStartIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const entriesEndIndex = computed(() =>  totalPages.value);





const setCurrentPage =(page:number)=>{
    emit('setPage', page)
}
const emit = defineEmits<{ (e: "setPage", value: number): void}>()

</script>

<template>
  
    <div class="flex justify-between items-center px-5 mt-5 text-sm text-[#6C757D]">
        <p>
            Showing {{ entriesStartIndex }} to {{ entriesEndIndex }} of {{ totalItems }} entries
        </p>
        <div>
          
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
</template>