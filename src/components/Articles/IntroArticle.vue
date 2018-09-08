


<template>
  <article class="main">
    <h2>To Grow Without Space</h2>

    <p>In the far far future, life on Earth is on the brink of extinction. A global war has erupted between the nations. The expansion colonies located on Mars have slowly failed without the support of mother Earth.</p>
    <p>The only known human life is located on the space stations orbiting the dying Earth. Communications with the governments of Earth have ceased. Without any direction from the blue planet, you have the final say on all matters dealing with station 7.</p>

    <h3>Missions</h3>

    <router-link
      to="/private"
      class="button button-gray"
      :class="isPrivateRocketCompleted"
    >
      Unknown Vessel
    </router-link>

    <router-link
      to="/pop"
      class="button button-gray"
      :class="isPopulationStable"
    >
      Population Limit
    </router-link>

    <router-link
      to="/visitors"
      class="button button-gray"
      :class="isVisitorsCompleted"
    >
      Raiders
    </router-link>

    <router-link
      to="/null"
      :class="isInventoryEmpty"
    >
    </router-link>

  </article>
</template>



<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'IntroArticle',
    computed: {
      ...mapGetters([
        'inventory',
        'people',
        'damage',
        'unrest'
      ]),
      isPrivateRocketCompleted: function () {
        return {
          'button-disabled': this.inventory.filter(item => item.name === 'note-vessel').length > 0
        }
      },
      isPopulationStable: function () {
        return {
          'button-disabled': (this.people < 99)
        }
      },
      isPopulationLimitCompleted: function () {
        return {
          'button-disabled': this.inventory.filter(item => item.name === 'note-population')
        }
      },
      isVisitorsCompleted: function () {
        return {
          'button-disabled': this.inventory.filter(item => item.name === 'note-raid').length > 0
        }
      },
      isInventoryEmpty: function () {
        return (
          this.inventory
            .filter(item => item.name === 'candy').length === 0 &&
          this.inventory
            .filter(item => item.name === 'kit').length === 0
        )
      }
    },
    mounted: function () {
      console.log('MOUNTY')
      if (this.people < 1) {
        // Lose condition-- population is <= 0
        console.log('population too low')
        this.$router.push({
          path: '/game-over'
        })
      } else if (this.damage > 99) {
        // Lose condition-- station destroyed from damage
        console.log('station destroyed')
        this.$router.push({
          path: '/game-over'
        })
      } else if (
        // Win condition-- all missions completed
        this.inventory.filter(i => i.name === 'note-vessel').length > 0 &&
        this.inventory.filter(i => i.name === 'note-raid').length > 0 &&
        this.inventory.filter(i => i.name === 'note-population').length > 0
      ) {
        console.log('missions completed!')
        this.$router.push({
          path: '/game-win'
        })
      } else if (
        this.inventory.filter(i => i.name === 'note-vessel').length === 0 &&
        this.inventory.filter(i => i.name === 'note-riot').length === 0 &&
        this.inventory.filter(i => i.name === 'note-population').length === 0 &&
        this.inventory.filter(i => i.name === 'candy').length === 0
      ) {
        // Lose condition -- cannot proceed on missions and inventory is empty
        console.log('lose')
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
