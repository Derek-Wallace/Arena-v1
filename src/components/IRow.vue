<template>
  <div class="row d-flex">
        <div class="spot" id="I1" @click="select('I1')">I1</div>
        <div class="spot" id="I2" @click="select('I2')">I2</div>
        <div class="spot">I3</div>
        <div class="spot">I4</div>
        <div class="spot">I5</div>
        <div class="spot">I6</div>
        <div class="spot">I7</div>
        <div class="spot">I8</div>
        <div class="spot">I9</div>
        <div class="spot">I10</div>
        <div class="spot">I11</div>
        <div class="spot">I12</div>
        <div class="spot">I13</div>
        <div class="spot">I14</div>
        <div class="spot">I15</div>
        <div class="spot">I16</div>
        <div class="spot">I17</div>
        <div class="spot">I18</div>
        <div class="spot">I19</div>
        <div class="spot">I20</div>
        </div>
</template>

<script>
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      select(id) {
        if (AppState.selectedSpot != null) {
          document.getElementById(AppState.selectedSpot).classList.remove('selected')
          console.log("removed last")
        }
        if (AppState.selectedSpot == id) {
          document.getElementById(id).classList.remove('selected')
          AppState.selectedSpot = null
          console.log("cleared self")
        }
        else {
          AppState.selectedSpot = id
          document.getElementById(id).classList.add('selected')
          console.log("selected new")
        }
      }
    }
  }
}
</script>

<style>
.selected {
  background-color: yellow;
}
</style>