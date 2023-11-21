<template>
    <div   class="absolute z-10  inline-block px-3 py-2 text-sm font-medium text-[#000] bg-[#ffffffc5] border border-[#1c191db6] rounded-lg shadow-sm ">
    
        <div class="flex-container">
            <div class="flex-items"> <img src="./../assets/img/warning.png" height="10" width="20" alt=""></div>
            <div class="flex-items">  <slot></slot></div>
         </div>   
      
        <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: normal;
    align-content: normal;
  }
  
  .flex-items {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    padding-inline: 5px;
  }
  
</style>