<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss" scoped>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.container {
  padding-bottom: 4rem;
}
</style>
