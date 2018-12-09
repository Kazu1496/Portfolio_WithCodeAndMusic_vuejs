<template>
  <header>
    <ul>
      <li>
        <!-- <transition name="fade">
          <router-link
            to="/artist"
            v-if="type == 'Engineer'"
            @click.native="typeToggle"
            v-scroll-to="'#about_content'"
            >
            {{ type }}
          </router-link>
          <router-link
            to="/"
            v-else
            @click.native="typeToggle"
            v-scroll-to="'#about_content'"
            >
            {{ type }}
          </router-link>
        </transition> -->
      </li>
      <li>
        <a href="javascript:void(0)" v-scroll-to="'#about_content'">About</a>
      </li>
      <li>
        <a href="javascript:void(0)" v-scroll-to="'#portfolio_content'">Works</a>
      </li>
      <li>
        <a href="mailto:ishikura.kazumasa@gmail.com">Contact</a>
      </li>
    </ul>
    <!-- <ul v-else>
      <li>
        <transition name="fade">
          <router-link
            to="/artist"
            v-if="type == 'Engineer'"
            @click.native="typeToggle"
            v-scroll-to="'#about_content'"
            >
            {{ type }}
          </router-link>
          <router-link
            to="/"
            v-else
            @click.native="typeToggle"
            v-scroll-to="'#about_content'"
            >
            {{ type }}
          </router-link>
        </transition>
      </li>
      <li>
        <a href="mailto:nico.kurenai@gmail.com">Contact</a>
      </li>
    </ul> -->
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  data: () => {
    return {
      type: 'Engineer'
    }
  },
  methods: {
    typeToggle: () => {
      if ( this.type == 'Engineer' ){
        this.type = 'Artist'
      } else {
        this.type = 'Engineer'
      }
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
        font-size: 13px;
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
</style>
