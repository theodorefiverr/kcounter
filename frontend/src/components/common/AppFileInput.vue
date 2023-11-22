<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
const emit = defineEmits<{
  (e: "upload", data: File[]): void;
}>();

const props = defineProps<{
  condition: (file: File) => boolean;
}>();
const events = ["dragenter", "dragleave", "dragover", "drop"];
const entering = ref(false);
const cvInput = ref<HTMLInputElement>();

onMounted(() => {
  events.forEach((event) =>
    document.body.addEventListener(event, (e) => e.preventDefault())
  );
});
onUnmounted(() => {
  events.forEach((event) =>
    document.body.removeEventListener(event, (e) => e.preventDefault())
  );
});

const handleChange = (e: any) => {
  //   const files = e.target.files;
  //   console.log(files);
  //   props.condition(files[0])
  //     ? emit("upload", [...files])
  //     : alert("Unsupported file type");
};
const handleDrop = (e: any) => {
  const files = e.dataTransfer?.files;
  console.log({ files });
  props.condition(files[0])
    ? emit("upload", [...files])
    : alert("Unsupported file type");
};

const handleInput = (e: any) => {
  const files = e.target.files;
  console.log({ files });
  props.condition(files[0])
    ? emit("upload", [...files])
    : alert("Unsupported file type");
};

const selectFile = () => {
  console.log(cvInput.value);
  cvInput.value?.click();
};
</script>

<template>
  <div
    @click="selectFile"
    class="w-full"
    @drop.prevent="handleDrop"
    @dragenter="entering = true"
    @dragleave="entering = false"
  >
    <slot></slot>
  </div>
  <input
    ref="cvInput"
    v-show="false"
    @change="handleChange"
    @input="handleInput"
    type="file"
  />
</template>

<style scoped></style>
