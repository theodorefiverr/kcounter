<template>
  <div class="max-w-4xl">
    <div class="border border-gray-500 p-12">
      <form class="space-y-6" @submit.prevent="calculate">
        <div>
          <p class="mt-4 text-center">
            Please note that this app has only been validated/calibrated with
            <snap class="font-semibold">low-grade meningiomas</snap> at
            <span class="font-semibold">10X magnification</span>. If there is
            demand, we will expand it in future updates. For questions, you can
            contact Aaishah Raquib at
            <a class="font-semibold" href="mailto:aaishah.raquib@gmail.com"
              >aaishah.raquib@gmail.com</a
            >
          </p>

          <div class="w-form">
            <label class="block label text-sm font-medium mt-5 text-gray-900"
              >Threshold*</label
            >
            <p class="text-sm mb-2 text-gray-700">
              (The validated threshold is 0.56 - only change this if you know
              what you're doing.)
            </p>
            <app-input
              v-model="threshold"
              name="company"
              type="text"
              class="text-field-3 w-input focus:outline-0"
              placeholder="Input the company name you are applying for"
              :disabled="true"
              required
            ></app-input>
            <div></div>
            <label
              for="email"
              class="block mb-2 label text-sm font-medium mt-5 text-gray-900"
              >Upload your Image format*</label
            >
            <div ref="imageValidator" style="display: none">
              <!-- <tool-tip>You must add a an Image</tool-tip> -->
            </div>

            <drag-drop-file @upload="setFile">
              <img
                v-if="counterStore.formValues?.image_url"
                :src="counterStore.formValues?.image_url"
                class="rounded-lg h-full"
                alt="sample"
              />
              <div v-else class="flex flex-col justify-center items-center">
                <div id="upload-icon" class="icon">
                  <app-icon icon="formkit:uploadcloud" width="100px" />
                </div>

                <p
                  style="color: #6b7380"
                  id="fileName"
                  class="text-xl"
                  v-if="counterStore.formValues?.image_file"
                >
                  {{ counterStore.formValues?.image_file?.name }}
                </p>
                <header style="color: #6b7380" class="text-xl">
                  {{
                    counterStore.formValues?.image_file == undefined
                      ? "Drag or Upload image here"
                      : ""
                  }}
                </header>
              </div>
            </drag-drop-file>
            <app-button
              :disabled="!(counterStore.formValues?.image_url ?? false)"
              :loading="loading"
            >
              Calculate
            </app-button>
          </div>
        </div>
      </form>
    </div>
    <div class="border border-gray-500 border-dashed p-12 my-2">
      <p class="body-1 mb-3 text-center">
        Here is a representative example of the type of image that was used to
        validate the algorithm. If your image has markedly different contrast,
        resolution, lighting, quality, etc, then the algorithm might give
        inaccurate results.
      </p>
      <div class="flex justify-center items-center">
        <img src="@/assets/Picture56.jpg" class="rounded-lg" alt="sample" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import DragDropFile from "@/components/common/DragDropFile.vue";
import { useCounterStore } from "@/stores/counter";
import { notify } from "@/utils/notify";

const counterStore = useCounterStore();

const threshold = ref("0.56");
const loading = ref(false);

const formData = computed(() => {
  let form_data = new FormData();
  form_data.append("image_file", counterStore.formValues.image_file!);
  return form_data;
});

const setFile = (file: File[]) => {
  console.log({ file: file[0] });
  counterStore.formValues.image_file = file[0];
  counterStore.formValues.image_url = URL.createObjectURL(file[0]);
};

// const dataURLtoFile = (dataUrl: string, filename: string) => {
//   let arr = dataUrl.split(","),
//     mime = arr[0]?.match(/:(.*?);/)?.[1],
//     bStr = atob(arr[1]),
//     n = bStr.length,
//     u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bStr.charCodeAt(n);
//   }
//   return new File([u8arr], filename, { type: mime });
// };

// const currentHost = window.location.protocol + '//' + window.location.host

const calculate = () => {
  if (!(counterStore.formValues?.image_url ?? false)) {
    return;
  }
  loading.value = true;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  counterStore
    .countCell((_, err) => {
      console.log(err);
      if (err)
        notify({
          type: "error",
          title: err,
        });
    }, formData.value)
    .then(() => {
      console.log(counterStore.counterData?.data);
      counterStore.currentStep = 2;
      loading.value = false;
    })
    .catch((err) => {
      console.log({ err });
      loading.value = false;
      notify({
        type: "error",
        title: err,
      });
    });
};
</script>

<style scoped></style>
