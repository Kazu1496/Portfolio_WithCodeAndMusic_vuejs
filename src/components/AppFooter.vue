<template>
  <footer>
    <ol>
      <li>
        <a href="https://www.instagram.com/kz_guitarman/" target="_blank" rel="noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          v-if="type === 'Engineer'"
          href="https://twitter.com/kazu_real20"
          target="_blank"
          rel="noreferrer"
          >
          <i class="fab fa-twitter-square"></i>
        </a>
        <a
          v-else
          href="https://twitter.com/kurenai1496"
          target="_blank"
          rel="noreferrer"
          >
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li v-if="type === 'Engineer'">
        <a href="https://www.facebook.com/profile.php?id=100013086785196" target="_blank" rel="noreferrer">
          <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li v-if="type === 'Artist'">
        <a href="https://www.youtube.com/channel/UCxlAoJglz1U38HFu2UY3AHg" target="_blank" rel="noreferrer">
          <i class="fab fa-youtube"></i>
        </a>
      </li>
      <li v-if="type === 'Engineer'">
        <a href="https://github.com/Kazu1496" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square"></i>
        </a>
      </li>
      <li v-if="type === 'Artist'">
        <a href="https://soundcloud.com/k-ishikura-guitar-kurenai" target="_blank" rel="noreferrer">
          <i class="fab fa-soundcloud"></i>
        </a>
      </li>
    </ol>
    <p>© 2019 Kazumasa Ishikura ver.1.3</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    type () {
      return this.$store.getters.getType
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
    background-color: #90201f;
    ol{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      li{
        font-size: 30px;
        list-style: none;
        margin: 0 20px;
        a{
          text-decoration: none;
          color: #FFF;
          &:hover{
            opacity: 0.7;
          }
        }
      }
    }
    p{
      text-align: center;
      color: #FFF;
      font-size: 12px;
      padding-bottom: 20px;
    }
  }
</style>
