


<template>
  <div class="pop">
    <h2>Station 7 is low on food and water. The Station will not survive if our population stays this numerous. As highest ranking officer, you are going to have to make a tough decision.</h2>
    <img
      :src="feet"
      width="200px"
      height="200px"
    ></img>
    <p>Space Station 7 is full!</p>
    <router-link
      class="button button-green"
      to="/pop-decision-1"
    >Next</router-link>
  </div>
</template>



<script>
  import feet from '@/assets/feet.png'

  export default {
    name: 'PopIntro',
    computed: {
      feet: () => feet
    }
  }
</script>


<style scoped>
</style>
