<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div><h1>WELCOME TO ARENA MASTERS</h1></div>
    <button class="btn dark" @click="start">Start</button>
  </div>
</template>

<script>
import { router } from "../router"
export default {
  setup() {
    return {
      start() {
        router.push({ name: 'Game'})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
