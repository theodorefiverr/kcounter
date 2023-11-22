<script setup lang="ts">
</script>

<template>
  <thead class="text-sm font-semibold text-primary bg-primary bg-opacity-10">
    <tr>
    <slot/>
      <th class="px-3 py-4 lg:hidden md:table-cell">Information</th>

      <th class="px-3 py-4 hidden lg:table-cell">Customer</th>
        <th class="px-3 py-4 hidden lg:table-cell">Driver</th>
      <th class="px-3 py-4 hidden lg:table-cell">Pick up</th>
      <th class="px-3 py-4 hidden lg:table-cell">Drop Off</th>
      <th class="px-3 py-4 hidden lg:table-cell">Cost</th>
        <th class="px-3 py-4 hidden lg:table-cell">Appointment Time</th>
        <th class="px-3 py-4 hidden lg:table-cell">Pick up Time</th>
        <th class="px-3 py-4 ">Status</th>
    </tr>
  </thead>
</template>
