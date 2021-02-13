<template>
  <div id="app">
    <div id="nav">
      <Navbar/>

    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
<style lang="scss">

</style>
