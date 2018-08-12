


<template>
  <article class="main">
    <h2>To Grow Without Space</h2>

    <p>In the far far future, life on Earth is on the brink of extinction. A global war has erupted between the nations. The expansion colonies located on Mars have slowly failed without the support of mother Earth.</p>
    <p>The only known human life is located on the space stations orbiting the dying Earth. Communications with the governments of Earth have ceased. Without any direction from the blue planet, you have the final say on all matters dealing with station 7.</p>

    <h3>Missions</h3>

    <router-link
      to="/private"
      class="button button-gray"
      :class="isScenarioCompleted"
    >
      Unknown Vessel
    </router-link>

    <router-link
      to="/null"
      class="button button-gray"
    >
      TBD
    </router-link>

    <router-link
      to="/null"
      class="button button-gray"
    >
      TBD
    </router-link>

  </article>
</template>



<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'IntroArticle',
    computed: {
      ...mapGetters([
        'inventory'
      ]),
      isScenarioCompleted: function () {
        return {
          'button-disabled': this.inventory.includes('private')
        }
      }
    },
    data () {
      return {
        completed: true
      }
    }
  }
</script>


<style scoped>
</style>
