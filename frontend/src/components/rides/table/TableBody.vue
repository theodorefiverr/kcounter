<template>
    <template data-popover ref="actionPopoverEl" role="tooltip"
    class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <slot/>
</template>
    <tr class="bg-white text-appBlack font-normal ">
        <slot name="checkbox"/>
        <td class="px-3 py-4 lg:hidden md:table-cell">

            <p class="text-lg normal-case leading-tight text-gray-900">
                {{ customer }}
            </p>
            <p class="text-lg normal-case leading-tight text-gray-900">
                {{ driver }}
            </p>

        </td>
        <td class="px-3 py-4 hidden lg:table-cell">
            {{ customer }}
        </td>
        <td class="px-3 py-4 hidden lg:table-cell">
            {{ driver }}
        </td>
        <td class="px-3 py-4 hidden lg:table-cell">

            {{ pickUp }}
        </td>

        <td class="px-3 py-4 hidden lg:table-cell">

            {{ dropOff }}
        </td>

        <td class="px-3 py-4 hidden lg:table-cell">

            {{ cost }}
        </td>


        <td class="px-3 py-4 hidden lg:table-cell">

            {{ appointment }}
        </td>

        <td class="px-3 py-4 hidden lg:table-cell">
            {{ vehicleType }}
        </td>


        <td class="px-3 py-4 font-bold">

            <div class="flex justify-between">
                <div class="w-20 h-8 rounded-3xl justify-start items-center inline-flex">
                    <div :class="status == 'completed' ? 'bg-emerald-700' : status == 'cancelled' ? 'bg-red-400' : status == 'onRoute' ? 'bg-primary' :status=='scheduled'?'bg-violet-500': 'bg-yellow-500'"
                         class="px-3 py-1  bg-opacity-10 rounded-3xl justify-start items-center flex">
                        <div :class="status == 'completed' ? 'text-emerald-700' : status == 'cancelled' ? 'text-red-400' : status == 'onRoute' ? 'text-primary' :status=='scheduled'?'text-violet-500': 'text-yellow-500'"
                             class="text-center text-sm font-bold capitalize leading-snug">
                            {{ status }}
                        </div>
                    </div>
                </div>
                <span ref="actionTriggerEl" @click="toggleAction">
                             <app-icon   class="text-gray-400 hover:text-gray-900" icon="pepicons-pencil:dots-y" width="23px"/>

                </span>
            </div>


        </td>



    </tr>
</template>

<script lang="ts" setup>
import type {Ride} from "@/stores/rides";
import { formattedDate} from "@/utils/axios";
import { newPopOver } from './action/state';
import router from '@/router';
import ActionPop from './action/ActionPop.vue';
import { ref } from "vue";
import type { PopoverInterface } from "flowbite";



const actionTriggerEl = ref<HTMLElement>()
const actionPopoverEl = ref<HTMLElement>()
const actionPopover = ref<PopoverInterface>();


const toggleAction = (e: any) => {
    e.preventDefault();
    if (actionPopoverEl.value && actionTriggerEl.value) {
        actionPopover.value = newPopOver(actionPopoverEl.value, actionTriggerEl.value)
        console.log(actionPopover.value);
    if(actionPopover.value)    actionPopover.value.show();
        return;
    }
    alert("no element")
}
const props = defineProps<{
    item: Ride
}>();

const pickUp= props.item.pickUp??"N/A";
const customer= props.item.user.displayName??"N/A";
const driver= props.item?.driver?.user?.displayName??"N/A";
const dropOff= props.item.dropOff??"N/A";
const cost= props.item.price??0;
const appointment= props.item?.appointmentTime? formattedDate(props.item.appointmentTime.toString()) : "N/A";
const pickupTime = props.item?.pickUpTime? formattedDate(props.item.pickUpTime.toString()) : "N/A";
const vehicleType= props.item.vehicleType??0;
const status= props.item.status??"N/A";
const statusColor = props.item.status == 'cancelled'?"red":props.item.status == 'onRoute'? 'blue': props.item.status=='completed'?'green': props.item.status=='scheduled'?'oranges':'yellow';


</script>