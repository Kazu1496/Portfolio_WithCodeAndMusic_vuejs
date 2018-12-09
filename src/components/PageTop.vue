<template>
  <main>
    <div class="remove_bg"></div>
    <div class="first_bg_color"></div>
    <div class="main_content">
      <h1><span>W</span>ith <span>C</span>ode and <span>M</span>usic</h1>
      <p>
        Frontend Engineer | Guitarist | Composer<br>
        HTML5 | CSS3 | JavaScript | jQuery | Ruby on Rails</p>
      <ol>
        <li>
          <a href="https://www.instagram.com/kz_guitarman/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            v-if="type == 'Engineer'"
            href="https://twitter.com/kazu_real20"
            target="_blank"
            >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            v-else
            href="https://twitter.com/kurenai1496"
            target="_blank"
            >
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
    </div>
  </main>
</template>

<script>
export default {
  name: 'PageTop',
  data () {
    return {
      active: true
    }
  },
  methods: {
    toggleType: () => {
      this.active = !this.active
    }
  }
}
// ページロード完了時にアニメーション発火
window.onload = () => {
  var remove_bg = document.getElementsByClassName('remove_bg')[0];
  var animation_bg = document.getElementsByClassName('first_bg_color')[0];
  var body = document.getElementsByTagName('body')[0];

  remove_bg.setAttribute('style', 'display: none');
  if (body.clientWidth > 768) {
    animation_bg.classList.add('class', 'moving-animation-pc');
    setTimeout(() => {
      animation_bg.setAttribute('style','left: 90%');
    }, 3000)
  } else {
    animation_bg.classList.add('class', 'moving-animation-sp');
    setTimeout(() => {
      animation_bg.setAttribute('style','display: none');
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media all and (min-width: 769px){
  main{
    width: 100vw;
    overflow-x: hidden;
    .remove_bg{
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 20;
    }
    .moving-animation-pc{
      animation: first_bg_moving 3s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    }
    .first_bg_color{
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 10;
      transform: skewX(-25deg);
    }
    .main_content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
      width: 100%;
      height: calc(100vh - 50px);
      color: #222;
      h1{
        font-size: 40px;
        text-transform: uppercase;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: url('../assets/main_content_bg.gif');
        background-position: center;
        user-select: none;
        letter-spacing: 10px;
        span{
          font-size: 80px;
        }
      }
      p{
        font-size: 12px;
        letter-spacing: 5px;
        line-height: 20px;
        margin-bottom: 40px;
      }
      ol{
        display: flex;
        flex-direction: row;
        li{
          list-style: none;
          padding-right: 30px;
          a{
            i{
              font-size: 20px;
              color: #222;
            }
            &:hover{
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  main{
    overflow: hidden;
    .remove_bg{
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 20;
    }
    .moving-animation-sp{
      animation: first_bg_moving_sp 3s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    }
    .first_bg_color{
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 10;
    }
    .main_content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
      width: 100%;
      height: calc(100vh - 50px);
      color: #222;
      h1{
        width: 280px;
        font-size: 30px;
        text-transform: uppercase;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: url('../assets/main_content_bg.gif');
        background-position: center;
        user-select: none;
        letter-spacing: 5px;
        span{
          font-size: 50px;
        }
      }
      p{
        font-size: 10px;
        letter-spacing: 1px;
        line-height: 20px;
        margin-bottom: 40px;
      }
      ol{
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        li{
          list-style: none;
          a{
            i{
              font-size: 20px;
              color: #222;
            }
            &:hover{
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
}
@keyframes first_bg_moving{
  0%{
    transform: skewX(0deg) translateX(0);
  }
  50%{
    transform: skewX(0deg) translateX(100%);
  }
  100%{
    transform: skewX(-25deg) translateX(90%);
  }
}
@keyframes first_bg_moving_sp{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(105%);
  }
}
</style>
