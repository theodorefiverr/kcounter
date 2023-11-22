<template>
<div ref="rideOptionsModal" tabindex="-1" aria-hidden="true"
     class="hidden overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
<slot/>
<div class="tooltip-arrow" data-popper-arrow></div>
</div>
</template>
 <script setup lang="ts">
    import {modal} from "./index";
    import {newModal} from "@/components/common/modal/state";
    import {ref} from "vue";
    const rideOptionsModal = ref<HTMLElement>()
    const show = () => {
        if (rideOptionsModal.value) {
            modal.value = newModal(rideOptionsModal.value)
            modal.value.show()
            return;
        }
        alert("no element")
    }
    defineExpose({
        show
    })
</script>