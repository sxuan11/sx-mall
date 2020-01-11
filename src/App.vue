<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './views/dashboard/DashBoard'

export default {
  name: 'app',
  components: {
    TabBar,
  }
}
</script>

<style>
@import './assets/css/common.sass';
</style>
