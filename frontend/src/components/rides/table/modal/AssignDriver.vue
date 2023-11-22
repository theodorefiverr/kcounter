<template>
    <div class="flex flex-col bg-white h-full w-96 p-4 overflow-y-auto transition-transform " tabindex="-1">
        <div>
            <h5 class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Assign Driver</h5>
            <button type="button" @click="close"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <!--  -->
            <!-- <app-input label="Search for Driver" :model-value="'Search driver'" :no-icon="true" labelClass="font-regular" type="email" name="email" -->
            <!-- placeholder="Uber Man"> -->
            <!--  -->
            <!-- </app-input> -->
        </div>
        <div class="py-4 overflow-y-auto h-full">
            <ul class="space-y-2 font-medium">
                <li v-for="(item, idx) in tableData" :item="item" :idx="idx" @click="selectDriver = item" :key="item.id"
                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="ml-3">{{ item.user?.displayName }} </span>
                </li>
            </ul>
        </div>
        <div class="py-4">
            <app-button :loading="loading" :on-click="assign">Assign {{ selectDriver?.user?.displayName }}</app-button>
        </div>
    </div>
    <div class="tooltip-arrow" data-popper-arrow></div>
</template>

<script setup lang="ts">
import { modal } from './';
import { onMounted, onUnmounted, ref } from 'vue';
import { useDriverStore, type Driver } from '@/stores/drivers';
import { notify } from '@/utils/notify';
import { appPost } from '@/utils/axios';
import type { AxiosError } from 'axios';
import { useRideStore } from '@/stores/rides';
const loading = ref(false);

const selectDriver = ref<Driver>()
const driverStore = useDriverStore()
const rideStore = useRideStore()
const emit =  defineEmits<{
    (e: "reloadRide"): void
}>()
onMounted(() => {
    if (!driverStore.driverData) driverStore.getDrivers((_, err) => {
        console.log(err)
        if (err) notify({
            type: 'error',
            title: err
        })
    }).then(() => {
        tableData.value = driverStore.driverData?.data.slice(0, 10).map(t => ({ ...t, checked: false })) ?? [];
    })
});

const tableData = ref(driverStore.driverData?.data.slice(0, 10).map(t => ({ ...t, checked: false })) ?? [])
const close = () => {
    modal.value?.hide()
    // router.go(-1);
}
onUnmounted(() => {
    modal.value?.hide()
})

const assign = async () => {
    if(!selectDriver.value){
        return notify({
            type: "error",
            title:" Select a driver"
        })
    }
    try {
        loading.value = true
        const { data } = await appPost(
            { body: { "tripId": rideStore.assigningRide?.id, "driverId": selectDriver.value?.id }, url: "trips/assign" }
        )
        if (data.status == true) {
            notify({
                type: "success",
                title: `${data.message}`
            });
            
            modal.value?.hide()
            emit('reloadRide')
        } else throw new Error(data.message);
    } catch (error) {
        notify({
            type: "error",
            title: `${(error as AxiosError<Error>)?.response?.data.message ?? (error as { message: string }).message ?? "Could not proceed your request"}`
        });
    } finally {
        loading.value = false;

    }

}
</script>

<style scoped></style>