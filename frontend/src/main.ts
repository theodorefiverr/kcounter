import { createApp } from "vue";
import { createPinia } from "pinia";
import VOtpInput from "vue3-otp-input";
import App from "./App.vue";
import router from "./router";
import AppInput from "@/components/common/AppInput.vue";
import AppTextArea from "@/components/common/AppInputArea.vue";
import AppButton from "@/components/common/AppButton.vue";
import AppFileInput from "@/components/common/AppFileInput.vue";
import AppSelect from "@/components/common/AppSelect.vue";
import { Icon } from '@iconify/vue';
import Notifications from "@kyvg/vue3-notification";
import "./assets/main.css";
import { appGet } from "./utils/axios";

const app = createApp(App);

app.use(createPinia());
app.use(Notifications)
app.component("app-input", AppInput);
app.component("app-textarea", AppTextArea);
app.component("app-button", AppButton);
app.component("app-select", AppSelect);
app.component("app-icon", Icon);
app.component("app-file-imput", AppFileInput);
app.component("v-otp-input", VOtpInput);



app.use(router);
app.mount("#app");


