<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
  	
  },
  mounted(){
//	this.$store.dispatch('getAreaData')
//	this.$store.dispatch('getAraeList')
//	this.$store.dispatch('getAdminList')
//	this.$store.dispatch('getVolunteerList')
  }
}
</script>

<style lang="scss">
  @import './styles/common.scss';
#app {
  background: #f4f4f4;
  height:100%;
}
</style>
