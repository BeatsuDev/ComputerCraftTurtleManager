<script setup lang="ts">
import FuelBar from "./FuelBar.vue";
import type { FuelProps } from './FuelBar.vue';

interface Props {
    turtleName: String,
    fuelProps: FuelProps,
}

const {turtleName, fuelProps} = defineProps<Props>();
</script>

<template>
    <div id="turtle-container">
        <h1>{{ turtleName }}</h1>
        Fuel: <FuelBar :currentFuelLevel="fuelProps.currentFuelLevel" :maxFuelLevel="fuelProps.maxFuelLevel"></FuelBar>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

#turtle-container {
    background-color: rgba(150, 150, 150, 0.2);
    border-radius: 25px;
    height: 250px;
    width: calc(100% - 10px);
    margin: 5px;
    padding: 10px;
    transition-duration: .3s;
}


#turtle-container:hover {
    cursor: pointer;
    background-color: rgba(150, 150, 150, 0.5);
}
</style>