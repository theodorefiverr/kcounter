<template>
  <div>
    <label
      class="block mb-2 text-sm text-gray-900 dark:text-white"
      :class="labelClass"
      :for="id"
      >{{ label }}</label
    >
    <div class="relative" :class="{ 'mb-6': !(noMb ?? false) }">
      <input
        :id="id"
        v-model="value"
        :disabled="diabled ?? true"
        class="bg-gray-50 border pl-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5"
        :placeholder="placeholder"
        :type="type"
        :name="name"
        :required="required ?? 'true'"
        :pattern="pattern"
        :title="title"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps<{
  label?: string;
  labelClass?: string;
  name?: string;
  preview?: boolean;
  diabled?: boolean;
  pattern?: string;
  title?: string;
  required?: "true" | "false";
  id?: string;
  type: string;
  modelValue?: string;
  placeholder: string;
  noIcon?: boolean;
  noMb?: boolean;
}>();
const value = ref<string>(props.modelValue ?? "");

watch(value, (v) => {
  emit("update:modelValue", v ?? "");
});

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<style scoped></style>
