


<template>
  <div class="stats">
    <h3>Station 7 Stats</h3>

    <div class="barsWrapper">
      <div class="bar1">
        <progress-bar
          :value="people"
          scale="Y"
          origin="bottom"
          bar-class="bg-info"
          :beneficial="false"
          label="people"
        />
      </div>
      <div class="bar2">
        <progress-bar
          :value="debris"
          scale="Y"
          origin="bottom"
          :beneficial="false"
          label="debris"
        />
      </div>
      <div class="bar3">
        <progress-bar
          :value="unrest"
          :beneficial="false"
          label="unrest"
        />
      </div>
      <div class="bar4">
        <progress-bar
          :value="damage"
          :beneficial="false"
          label="damage"
        />
      </div>
    </div>
  </div>
</template>



<script>
  import ProgressBar from '@/components/GUI/ProgressBar'

  export default {
    components: {
      ProgressBar
    },
    name: 'Stats',
    props: {
      people: Number,
      debris: Number,
      unrest: Number,
      damage: Number
    }
  }
</script>


<style scoped>
  .barsWrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  .barsWrapper > * {
    flex: 1 1 100%;
  }
</style>
