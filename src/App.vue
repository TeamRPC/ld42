<template>
  <div id="app">

    <div
      id="devtools"
      :class="{'is-collapsed' : collapsed }"
    >
      <h2>Developer Tools</h2>
      <ul>
        <li>
          <router-link to="/game">Game</router-link>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <button
            class="button button-blue"
            @onclick="commit('consumeInventory', 'Transparent Aluminium Repair Kit')"
          >
          Consume Inventory Item
          </button>
        </li>
        <li>
          <button
            class="button button-blue"
            id="devtoolsbtn"
            v-on:click=" collapsed = !collapsed"
          >
            🖥 Developer Tools️
          </button>
        </li>
        <li>
          <button class="button button-blue" @click="sfxTest">SFX Test</button>
        </li>
      </ul>

      <aplayer
        :music="sfx"
        :mini="false"
        :controls="true"
        :mutex="false"
        ref="sfxPlayer"
      />
    </div>

    <div class="wrapper">
      <header class="header">
        <router-link
          class="nostyle"
          to="/"
        >
          {{ title }}
        </router-link>
      </header>
      <div class="main">
        <transition class="child-view" name="fade" mode="out-in">
          <router-view name="content"></router-view>
        </transition>
      </div>
      <aside class="aside aside-1">
        <Inventory
          :inventory="inventory"
        ></Inventory>
      </aside>
      <aside class="aside aside-2">
        <stats
          :people="people"
          :debris="debris"
          :unrest="unrest"
          :damage="damage"
        ></stats>
      </aside>
      <footer class="footer">
        <h4>Music</h4>
        <aplayer autoplay
          :music="music"
          :list="musicList"
          :mini="false"
          :controls="true"
          :mutex="false"
          ref="musicPlayer"
        />

        <button id="devtoolsbtn" v-on:click=" collapsed = !collapsed">🖥 Developer Tools️</button>

      </footer>
    </div>


  </div>
</template>



<script>
  import Aplayer from 'vue-aplayer'
  // import VueAudio from 'vue-audio';
  import { mapGetters, mapActions } from 'vuex'

  import Stats from '@/components/GUI/Stats'
  import Inventory from '@/components/GUI/Inventory'

  import stones from '@/assets/Stepping Stones.mp3'
  import feet from '@/assets/feet.png'
  import chrisPic from '@/assets/grimtech.jpeg'

  import mancyPic from '@/assets/mancy.jpg'
  import mancyMp3 from '@/assets/mancy.mp3'

  import niceMp3 from '@/assets/nice.mp3'

  import lazerMp3 from '@/assets/lazer2.mp3'
  import lazerPic from '@/assets/lazer.jpg'

  import eyeMp3 from '@/assets/eye.mp3'
  import medamaMp3 from '@/assets/目玉（ｍｅｄａｍａ)  「EYEBALL」.mp3'
  import eyePic from '@/assets/Eye_iris.jpg'

  import hardMp3 from '@/assets/hard.mp3'
  import hardPic from '@/assets/hard.jpg'

  import hailMp3 from '@/assets/FX049.mp3'
  // import warpMp3 from '@/assets/FX043.mp3'

  export default {
    name: 'App',
    components: {
      Aplayer,
      Stats,
      Inventory
    },
    computed: mapGetters([
      'people',
      'debris',
      'unrest',
      'damage',
      'inventory'
    ]),
    methods: {
      ...mapActions([
        'addDebris',
        'grantInventory'
      ]),
      sfxTest: function () {
        console.log(this.$refs.musicPlayer)
        this.$refs.sfxPlayer.onSelectSong(this.$data.sfx)
      }
    },
    data () {
      return {
        music: {
          title: 'lazer2',
          artist: 'Chris Grimmett',
          src: lazerMp3,
          pic: lazerPic
        },
        musicList: [
          {
            title: 'lazer2',
            artist: 'Chris Grimmett',
            src: lazerMp3,
            pic: lazerPic
          },
          {
            title: 'MANCY',
            artist: 'Chris Grimmett',
            src: mancyMp3,
            pic: mancyPic
          },
          {
            title: 'nice',
            artist: 'Chris Grimmett',
            src: niceMp3,
            pic: chrisPic
          },
          {
            title: 'EYE',
            artist: 'Chris Grimmett',
            src: eyeMp3,
            pic: eyePic
          },
          {
            title: 'HARD',
            artist: 'Chris Grimmett',
            src: hardMp3,
            pic: hardPic
          },
          {
            title: '目玉（ｍｅｄａｍａ)  「EYEBALL」',
            artist: 'Chris Grimmett',
            src: medamaMp3,
            pic: eyePic
          },
          {
            title: 'Stepping Stones',
            artist: 'Matthew Pablo',
            src: stones,
            pic: feet
          }
        ],
        sfx: {
          title: 'Hail',
          src: hailMp3
        },
        title: 'To Grow without Space',
        collapsed: true
      }
    }
  }
</script>




<style>
a {
  text-decoration: none;
}

.is-collapsed {
	display: none;
}

#devtools {
  position: absolute;
  z-index: 50;
  background-color: white;
  border: 1px solid black;
  width: 35%;
  filter: drop-shadow(16px 16px 20px black);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

#devtoolsbtn {
  display: inherit;
}


.wrapper {
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
}

.wrapper > * {
  padding: 10px;
  flex: 1 1 100%;
}

.header {
  background: #FFAA5C;
}

.main {
  text-align: left;
  background: #3E99A6;
  flex: 1 0 auto;
  height: 75vh;
  overflow-y: scroll;
}

.footer {
  background: #73DB85;
  margin-top: auto;
}

.aside-1 {
  background: white;
}

.aside-2 {
  background: white;
}

@media all and (min-width: 600px) {
  .aside { flex: 1 auto; }
}

@media all and (min-width: 800px) {
  .main    { flex: 3 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}

body {
  padding: 2em;
  background-image: url('assets/metal.png');
  background-repeat: repeat;
}

.button {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.button-green {background-color: #4CAF50;} /* Green */
.button-blue {background-color: #008CBA;} /* Blue */
.button-red {background-color: #f44336;} /* Red */
.button-gray {background-color: #e7e7e7; color: black;} /* Gray */
.button-black {background-color: #555555;} /* Black */
.button-disabled {
  background-color: #555555;
  pointer-events: none;
}

</style>
