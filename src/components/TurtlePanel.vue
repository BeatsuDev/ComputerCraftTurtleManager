<script setup lang="ts">
import type { Ref } from "vue";
import FuelBar from "./FuelBar.vue";
import { ref, provide } from "vue";

interface Props {
    turtleName: String,
    currentFuelLevel: Number,
    maxFuelLevel: Number,
}

const props = defineProps<Props>();
const { turtleName } = props;

const currentFuelLevel: Ref<number> = ref(0);
const maxFuelLevel: Ref<number> = ref(0);

currentFuelLevel.value = props.currentFuelLevel as number;
maxFuelLevel.value = props.maxFuelLevel as number;

provide("currentFuelLevel", currentFuelLevel);
provide("maxFuelLevel", maxFuelLevel);
</script>

<template>
    <div id="turtle-container">
        <h1>{{ turtleName }}</h1>
        Fuel: {{ currentFuelLevel }} / {{ maxFuelLevel }}
        <FuelBar />
        <TurtleInventory />
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