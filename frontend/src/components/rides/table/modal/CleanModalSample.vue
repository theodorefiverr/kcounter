<template>
    <div>
        <ModalWrapper @close="close">
            <template #header>
            </template>
                    <app-select :label="'Select Driver'" model-value="">
                        <option selected>First Bank</option>
                        <option value="US">GTBank</option>
                    </app-select>
                <app-button @click="proceed" :loading="!true"> Assign</app-button>
        </ModalWrapper>
    </div>
</template>

<script setup lang="ts">
import { modal } from './';
import { useRouter } from 'vue-router'
import { onUnmounted} from 'vue';
import ModalWrapper from "@/components/common/modal/ModalWrapper.vue";

const router = useRouter()
const proceed = () => {
    router.push('/payments/authorization')
}
const close = () => {
    router.go(-1);
}
onUnmounted(() => {
    modal.value?.hide()
})
</script>

<style scoped></style>