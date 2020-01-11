<template>
  <div id='home'>
    <TopBar></TopBar>
    <Swipe></Swipe>
    <Grid></Grid>
  </div>
</template>

<script>
  import Swipe from './components/Swipe/Swipe'
  import TopBar from './components/TopBar/TopBar'
  import Grid from './components/Grid/Grid'
  import {getHomeData} from './../../server/api/index.js'
  export default {
    name:'Home',
    components:{
      Swipe,
      TopBar,
      Grid
    },
    created() {
      getHomeData().then((response)=>{
        console.log(response);
      }).catch(error=>{
        console.log(error);
        //TODO
      })
    }
  }
</script>

<style lang="scss" scoped>
#home{
  width: 100%;
  height: 100%;

}
</style>