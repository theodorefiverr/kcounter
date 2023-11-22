<template>
  <label class="block mb-2 text-sm  text-gray-900 dark:text-white" :class="labelClass" :for="id">{{ label }}</label>
  <select :disabled="disabled??false" :id="id" v-model="value" class="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <!-- <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option> -->
    <slot></slot>
  </select>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  label?: string
  labelClass?: string
  name?: string,
  preview?: boolean,
  pattern?: string,
  title?: string,
  required?: 'true' | 'false',
  id?: string,
  type: string,
  modelValue: string,
  placeholder: string
  disabled?: boolean
}>()
const value = ref<string>(props.modelValue)

watch(value, (v) => {
  emit('update:modelValue', v ?? '')
})


const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>()
</script>

<style scoped></style>
