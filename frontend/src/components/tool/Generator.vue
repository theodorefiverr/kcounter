<template>
  <div class="div-block-38">
    <div class="form-box">
      <div class="w-embed w-script">
        <form class="space-y-6" @submit.prevent="calculate">
          <div>
            <div class="tab-box">
              <h1 class="heading-15" style="color:#bc49d3">Ki-67 counter</h1>

              <p class="body-1 mt-20 center">
                Please note that this app has only been validated/calibrated with <b>low-grade meningiomas</b> at <b>10X
                  magnification</b>.
                If there is demand, we will expand it in future updates.
                For questions, you can contact Aaishah Raquib at aaishah.raquib@gmail.com
              </p>

              <div class="w-form">
                <label class="block  label text-sm font-medium mt-5 text-gray-900">Threshold*</label>
                <p class="text-sm mb-2 text-gray-700">(The validated threshold is 0.56 - only change this if you know what
                  you're doing.)</p>
                <input v-model="threshold" name="company" type="text" class="text-field-3 w-input focus:outline-0"
                  placeholder="Input the company name you are applying for" required />


                <label for="email" class="block mb-2 label text-sm font-medium mt-5 text-gray-900">Upload your Image
                  format*</label>
                <div ref="imageValidator" style="display:none"><tool-tip>You must add a an Image</tool-tip></div>
                <drag-drop-file @upload="setFile">
                  <div id="upload-icon" class="icon">
                    <i style="color: #6b7380;" class="fas fa-cloud-upload-alt"></i>
                  </div>
                  <div id="file-icon" style="display: none" class="icon">
                    <i class="fas fa-file"></i>
                  </div>
                  <p style="color: #6b7380;" id="fileName" v-if="formValues?.image_file">
                    {{ formValues?.image_file?.name }}
                  </p>
                  <header class="details" style="color: #6b7380; font-size: large;">
                    {{
                      formValues?.image_file == undefined
                      ? "Drag or Upload image here"
                      : ""
                    }}
                  </header>
                </drag-drop-file>
                <div class="div-block-35 mt-6"> <button v-if="loading" class="button-item "
                    style="color: #fff; background-color: #bc49d3">
                    <div class="flex justify-center items-center" role="status">
                      <svg aria-hidden="true"
                        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#bc49d3]" fill="none"
                        viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor" />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </button>
                  <button v-else class="button-item " style="color: #fff; background-color: #bc49d3">
                    Calculate
                  </button>

                </div>
              </div>


            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { postReq } from "@/utils/axios";
import DragDropFile from "./DragDropFile.vue";
import Swal from 'sweetalert2'
// show the tooltip
// const cvValidator = ref<HTMLElement>();
// const jobDescriptionValidator = ref<HTMLElement>();
interface FormValues {
  image_file?: File;
}
const threshold = ref(0.56)
const loading = ref(false)
const formValues = ref<FormValues>({});
const formData = computed(() => {
  let form_data = new FormData();
  form_data.append("image_file", formValues.value.image_file!);
  return form_data;
});

const setFile = (file: File[]) => {
  console.log({ file: file[0] });
  formValues.value.image_file = file[0];
};


const currentHost = window.location.protocol + '//' + window.location.host
const calculate = () => {
  loading.value = true;
  window.scrollTo(0, 0)
  document.body.scrollTop = 0;
  postReq({
    url: `${currentHost}/count-cell?threshold=${threshold.value ?? 0.56}`,
    body: formData.value,
    result: (result) => {
      loading.value = false;
      console.log(result)
      console.log(result.data)
      const res = (Math.ceil(parseFloat(result.data) * 100) / 100);
      Swal.fire(
        `${res}`,
        'Here is your result',
        'success'
      )
      try {

      } catch (error) {

      }

    },
    error: (err) => {

      loading.value = false;
    },
  });
};





</script>

<style scoped>
.div-block-38 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-top: 12px;

  border-radius: 16px;

  background-position: 0px 0px;
  background-size: cover;
}

.form-box {
  padding: 56px 40px 50px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: 1px solid #191919;
  border-radius: 16px;
  background-color: #fff;
  -webkit-transform: translate(-12px, -12px);
  -ms-transform: translate(-12px, -12px);
  transform: translate(-12px, -12px);
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.heading-15 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  font-weight: 700;
  color: #202020;
}

.body-1 {
  text-align: center;
  margin-top: 20px;
  font-family: "Satoshi-Regular", sans-serif;
  color: rgb(59, 59, 59);
  font-size: 16px;
  line-height: 30px;
}

.label {
  font-size: large;
  margin-bottom: 15px;
}

textarea.w-input,
input.w-input,
textarea.w-select {
  height: auto;
  box-shadow: none;
}

.text-field-3 {
  height: 58px;
  padding-bottom: 18px;
  padding-left: 24px;
  border: 1px none #000;
  border-radius: 10px;
  background-color: #f4f4f4;
}



.w-input,
.w-select {
  display: block;
  font-family: "Satoshi-Bold", serif;
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

.w-input::placeholder,
.w-select {
  font-family: "Satoshi-Light", serif;
}

textarea {
  overflow: auto;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

.w-input:focus,
.w-select:focus {
  border-color: #6d6d6d;
  outline: 0;
}

.drag-area {
  border: 2px dashed #000;
  height: 230px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.div-block-35 {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: normal;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>
