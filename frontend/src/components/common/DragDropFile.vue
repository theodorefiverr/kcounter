<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
const emit = defineEmits<{
  (e: "upload", data: File[]): void;
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
  const files = e.target.files;
  console.log(files);
  files[0].name.includes("png") ||
  files[0].name.includes("jpg") ||
  files[0].name.includes("jpeg")
    ? emit("upload", [...files])
    : alert("Unsupported file type");
};
const handleDrop = (e: any) => {
  const files = e.dataTransfer?.files;
  console.log({ files });
  files[0].name.includes("png") ||
  files[0].name.includes("jpg") ||
  files[0].name.includes("jpeg")
    ? emit("upload", [...files])
    : alert("Unsupported file type");
};

const handleInput = (e: any) => {
  const files = e.target.files;
  console.log({ files });
  files[0].name.includes("png") ||
  files[0].name.includes("jpg") ||
  files[0].name.includes("jpeg")
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
    class="drag-area text-field-3 w-input"
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

<style scoped>
.text-field-3 {
  height: 58px;
  margin-top: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  border: 1px none #3d3b3b;
  border-radius: 10px;
  background-color: #f4f4f4;
}

.w-input,
.w-select {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  vertical-align: middle;
  background-color: #f4f4f4;
  border: 1px solid #cccccc;
}

.w-input:focus,
.drag-area {
  border: 2px dashed #9c9c9c;
  height: 230px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
