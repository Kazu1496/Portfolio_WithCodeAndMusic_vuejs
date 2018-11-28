<template>
  <header>
    <ol>
      <li>
        <a href="javascript:void(0)" v-scroll-to="'#about_content'">ABOUT</a>
      </li>
      <li>
        <a href="javascript:void(0)" v-scroll-to="'#portfolio_content'">WORKS</a>
      </li>
      <li>
        <a href="mailto:ishikura.kazumasa@gmail.com">CONTACT</a>
      </li>
    </ol>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media all and (min-width: 769px){
  header{
    ol{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 20px;
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
    ol{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0;
      li{
        font-size: 13px;
        list-style: none;
        padding: 0 20px;
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
