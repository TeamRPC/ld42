


<template>
  <div class="item-wrapper" :class="{'invis': hidden}">
    <div class="item">
      <img
        width="100px"
        height="100px"
        :src="image"
      ></img>
      <h4>{{ label }}</h4>
      <p>(qty {{ quantity }})</p>
    </div>
  </div>
</template>



<script>
  import jar from '@/assets/empty-jar.png'

  export default {
    name: 'Item',
    props: {
      name: {
        type: String,
        default: 'void-rondo'
      },
      label: {
        type: String,
        default: 'Void Rondo'
      },
      image: {
        type: String,
        default: jar
      },
      quantity: {
        type: Number,
        default: 1
      },
      hidden: {
        type: Boolean,
        default: false
      }
    },
    computed: {

    }
  }
</script>


<style scoped>
  .invis {
    display: none;
  }

  .progressbar {
    display: flex;
    flex-flow: column nowrap;
    min-height: 100px;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 3px;
    -moz-border-radius: 3px;
    margin: 3px;
    background: white;
  }

  .progressbar > * {
    flex: 1 1 100%;
  }

  .bar-empty {
    flex: 0 1 auto;
    order: 0;
  }

  .bar-filled {
    flex: 1 0 auto;
    transform-origin: bottom center 0px;
    -moz-transition: 1s ease;
  }

  .barBeneficial {
    background: #29BB42;
  }

  .barWarning {
    background: #FFAA5C;
  }

  .barUnbeneficial {
    background: #F44436;
  }


</style>
