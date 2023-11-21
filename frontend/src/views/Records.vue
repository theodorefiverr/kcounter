<script setup lang="ts">
import { ref } from "vue";
import { fbService } from "@/utils/firebase/firestore";

interface Usage {
  amount?: number;
  users?: number;
}

const usage = ref<Usage>();
fbService
  .streamData("usage/letters",{
    snapshot: (e) => (usage.value = e.data()),
    error:(err) => {console.log(err)}
    })
</script>

<template>
    <div class="container">
        <h2 v-if="usage?.users && usage?.amount" class="framer-text"> Join
            <span class="framer-text">{{usage?.users}} users</span> who have generated  <span class="framer-text">{{usage?.amount}} Cover Letters</span>
          </h2>
    </div>

</template>

<style scoped>

.container{
    background-image: url("https://framerusercontent.com/images/XLpYlOgD5OMJSHnjexpLa3dk30.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 15px;
    border-radius: 40px;
}

.framer-text{
   color: rgb(231, 235, 242);
   font-family: "Satoshi-Bold", serif;
   font-size: 30px;
   font-style: normal;
   font-weight: 400;
   letter-spacing: -1px;
   line-height: 1.1em;
   text-decoration: none;
   text-transform: none;
   text-align: center;
}

span {
    color: rgb(209, 18, 190) !important ;
}
</style>