<script setup lang="ts">
import TurtlePanel from "./components/TurtlePanel.vue";

const names = [
  "Brigette",
  "Bargie",
  "Mariette",
  "Charlotte",
  "Palette",
  "Marlotte",
  "Pariette",
];
</script>

<template>
  <h1>Turtles!</h1>
  <br>
  <div id="turtle-panel">
    <TurtlePanel v-for="name in names" :turtleName="name" :fuelProps="{currentFuelLevel: 0, maxFuelLevel: 20000}" ></TurtlePanel>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
  font-weight: 900;
}

#turtle-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1000px) {
  #turtle-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  } 
}

@media (max-width: 600px) {
  #turtle-panel {
    display: grid;
    grid-template-columns: 1fr;
  } 
}

@media (min-width: 2000px) {
  #turtle-panel {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  } 
}
</style>
