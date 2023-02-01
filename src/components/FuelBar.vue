<script setup lang="ts">
export interface FuelProps {
    currentFuelLevel: number,
    maxFuelLevel: number,
}

const { currentFuelLevel, maxFuelLevel } = defineProps<FuelProps>();

</script>

<template>
    <span>{{ currentFuelLevel }} / {{ maxFuelLevel }}</span>
</template>

<style scoped>
span {
    color: white;
}
</style>