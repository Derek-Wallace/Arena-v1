<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 mx-auto mt-5 game-grid">
        <ARow />
        <BRow />
        <CRow />
        <DRow />
        <ERow />
        <FRow />
        <GRow />
        <HRow />
        <IRow />
        <JRow />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
export default {
setup() {
  return {
    select(id) {
    }
  }
}
}
</script>

<style>
.game-grid {
  height: 77vh;
  width: 75vw;
  border: 2px solid black;
}
.spot {
  height: 71.8px;
  width: 71.8px;
  border: 2px solid rgba(0, 0, 0, 0.5);
}
.block {
  height: 71.8px;
  width: 71.8px;
  border: 2px solid red;
  background-color: red;
}
</style>