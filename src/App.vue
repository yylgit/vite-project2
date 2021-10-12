<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>MODE{{MODE}}</div>
  <div>BASE_URL{{BASE_URL}}</div>
  <div>PROD{{PROD}}</div>
  <div>DEV{{DEV}} 2</div>
  <!-- <div>define{{define}}</div> -->
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      MODE: import.meta.env.MODE,
      BASE_URL: import.meta.env.BASE_URL,
      PROD: import.meta.env.PROD,
      DEV: import.meta.env.DEV,
      // define: VITE_DEFINE
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
