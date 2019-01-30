<template>
  <header>
    <ul>
      <li>
        <router-link
          to="/artist"
          v-if="type == 'Engineer'"
          @click.native="typeToggle"
          v-scroll-to="'#about_content'"
          >
          Artist
        </router-link>
        <router-link
          to="/"
          v-else
          @click.native="typeToggle"
          v-scroll-to="'#about_content'"
          >
          Engineer
        </router-link>
      </li>
      <li>
        <a href="mailto:ishikura.kazumasa@gmail.com">Contact</a>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    type () {
      return this.$store.getters.getType
    }
  },
  methods: {
    typeToggle () {
      this.$store.dispatch('typeToggle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media all and (min-width: 769px){
  header{
    ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      li{
        font-size: 15px;
        list-style: none;
        padding: 0 20px;
        &:not(:last-child){
          border-right: 1px solid #888;
        }
        a{
          text-decoration: none;
          color: #888;
          border-bottom: 2px solid #FFF;
          transition: border-bottom 0.3s;
          &:hover{
            border-bottom: 2px solid #90201f;
            transition: border-bottom 0.3s;
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  header{
    ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0;
      li{
        font-size: 20px;
        list-style: none;
        padding: 0 15px;
        &:not(:last-child){
          border-right: 1px solid #888;
        }
        a{
          text-decoration: none;
          color: #888;
        }
      }
    }
  }
}
@media all and (max-width: 640px){
  header{
    ul{
      li{
        font-size: 13px;
      }
    }
  }
}
</style>
