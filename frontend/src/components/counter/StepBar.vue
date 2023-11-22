<template>
  <div>
    <ol
      class="flex items-center w-full p-3 mb-3 gap-2 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
    >
      <li
        class="flex items-center gap-2"
        :class="{
          'text-blue-600 dark:text-blue-500': (currentStep ?? 1) === 1,
        }"
      >
        Detection Form
        <svg
          class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>

      <li
        class="flex items-center gap-3"
        :class="{
          'text-blue-600 dark:text-blue-5000': (currentStep ?? 1) === 2,
        }"
      >
        Ki-67 count
        <app-icon icon="fluent-mdl2:completed" width="15px" />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentStep: number;
}>();
</script>

<style scoped></style>
