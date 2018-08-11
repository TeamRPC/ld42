


<template>
  <div class="hallway">
    <p>The Hallway</p>
    <router-link
      class="button button-red"
      to="/door2"
    >
      Enter Door
    </router-link>
    <router-link
      class="button button-blue"
      to="/door1"
    >
      Enter Door 1
    </router-link>
  </div>
</template>



<script>
  export default {
    name: 'HallwayArticle'
  }
</script>


<style scoped>
</style>
