<template>
  <footer>
    <ol>
      <li>
        <a href="https://www.instagram.com/kz_guitarman/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/kazu_real20" target="_blank">
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=100013086785196" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/Kazu1496" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
      </li>
    </ol>
    <p>© 2018 Kazumasa Ishikura ver.1.3</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
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
