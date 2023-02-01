<script setup lang="ts">
import type { Ref } from "vue";
import { computed, inject } from "vue";

const currentFuelLevel: Ref<number> | undefined = inject("currentFuelLevel");
const maxFuelLevel: Ref<number> | undefined = inject("maxFuelLevel");

if (currentFuelLevel === undefined || maxFuelLevel === undefined) {
    throw new Error("FuelBar must be used within a TurtlePanel");
}

const currentFuelLevelPercent = computed(() => {
    return (currentFuelLevel.value / maxFuelLevel.value) * 100 + "%";
});

function decreaseFuel() {
    if (currentFuelLevel === undefined) {
        return;
    }
    if (currentFuelLevel.value <= 200) {
        currentFuelLevel.value += Math.round(10000*Math.random());
    }
    currentFuelLevel.value -= 1;
    setTimeout(decreaseFuel, Math.random()*3000);
}
setTimeout(decreaseFuel, Math.random()*5000);
</script>

<template>
    <div id="progress-bar">
        <div id="progress"></div>
    </div>
</template>

<style scoped>
#progress-bar {
    position: relative;
    background-color: rgba(120, 40, 40, 1);
    border-radius: 25px;
    height: 15px;
    width: calc(100% - 10px);
    margin: 5px;
    transition-duration: .3s;
}

#progress {
    position: relative;
    padding-left: 10px;
    left: 0; top: 0;
    height: 100%;
    margin: 0; padding: 0;
    background-color: rgba(0, 255, 0, 0.8);
    border-radius: 25px;
    transition-duration: .3s;
    width: v-bind(currentFuelLevelPercent);

    text-align: center;
    white-space: nowrap;
    color: black;
    font-weight: 700;
}
</style>