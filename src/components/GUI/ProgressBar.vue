


<template>
  <div class="pb-wrapper">
    <div class="progressbar">
      <div class="bar-empty">
      </div>
      <div
        class="bar-filled"
        :class="{
          barBeneficial: beneficial || (!beneficial && value <= 32),
          barWarning: !beneficial && value >= 33,
          barUnbeneficial: !beneficial && value >= 66
        }"
        :style="barStyle"
      >
      </div>
    </div>
    <div class="progressbar-label">{{ label }}</div>
  </div>
</template>



<script>
  export default {
    name: 'ProgressBar',
    props: {
      value: {
        type: Number,
        default: 5
      },
      beneficial: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      }
    },
    computed: {
      barStyle () {
        return {
          transform: `scaleY(${this.value * 0.01})`
        }
      }
    }
  }
</script>


<style scoped>
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
