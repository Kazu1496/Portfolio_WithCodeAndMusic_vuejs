<template>
  <section>
    <div class="remove_bg">
      <p class="loading_text">LOADING</p>
    </div>
    <div class="first_bg_color"></div>
    <div class="first_bg_color_2"></div>
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
    <div class="scroll_mark" v-scroll-to="'#about_content'">
      <i class="fas fa-angle-down"></i>
    </div>
  </section>
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
window.onload = () => {
  // ページロード完了時にアニメーション発火
  const remove_bg = document.getElementsByClassName('remove_bg')[0];
  const animation_bg = document.getElementsByClassName('first_bg_color')[0];
  const animation_bg_2 = document.getElementsByClassName('first_bg_color_2')[0];
  const body = document.getElementsByTagName('body')[0];
  const loading_text = document.getElementsByClassName('loading_text')[0];

  loading_text.classList.add('class', 'fadeout')
  loading_text.addEventListener('animationend', () => {
    remove_bg.setAttribute('style', 'display: none');
    if (body.clientWidth > 768) {
      animation_bg.classList.add('class', 'moving-animation-pc');
      animation_bg.addEventListener('animationend', () => {
        animation_bg_2.classList.add('class','moving-animation-2-pc');
      });
    } else {
      animation_bg.classList.add('class', 'moving-animation-sp');
      animation_bg.addEventListener('animationend', () => {
        animation_bg.setAttribute('style', 'display: none');
      });
    }
  });
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media all and (min-width: 769px){
  section{
    width: 100vw;
    overflow-x: hidden;
    .remove_bg{
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100%;
      background-color: #90201f;
      z-index: 20;
      p{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #FFF;
        font-size: 15px;
        letter-spacing: 10px;
      }
      .fadeout{
        animation: fadeOut 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }
    }
    .moving-animation-pc{
      animation: first_bg_moving 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    .moving-animation-2-pc{
      animation: first_bg_moving_2 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    .first_bg_color{
      position: fixed;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 10;
    }
    .first_bg_color_2{
      position: absolute;
      top: 0;
      left: 100%;
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
        justify-content: space-between;
        width: 200px;
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
    .scroll_mark{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 90%;
      left: 50%;
      width: 50px;
      height: 50px;
      color: #90201f;
      text-align: center;
      background-color: #FFF;
      border-radius: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      animation: scroll_animation 2s ease-in-out infinite normal;
      &:hover{
        color: #FFF;
        background-color: #90201f;
      }
      i{
        font-size: 30px;
      }
    }
  }
}
@media all and (max-width: 768px){
  section{
    overflow: hidden;
    .remove_bg{
      position: fixed;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 20;
      p{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #FFF;
        font-size: 15px;
        letter-spacing: 10px;
      }
      .fadeout{
        animation: fadeOut 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }
    }
    .moving-animation-sp{
      animation: first_bg_moving_sp 2s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    .first_bg_color{
      position: fixed;
      top: 0;
      left: 0;
      height: calc(100vh + 10px);
      width: 100%;
      background-color: #90201f;
      z-index: 10;
    }
    .first_bg_color_2{
      display: none;
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
    .scroll_mark{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 90%;
      left: 50%;
      width: 50px;
      height: 50px;
      color: #90201f;
      text-align: center;
      background-color: #FFF;
      border-radius: 50%;
      transform: translateX(-50%);
      transition: all 0.3s;
      animation: scroll_animation 2s ease-in-out infinite normal;
      &:hover{
        color: #FFF;
        background-color: #90201f;
      }
      i{
        font-size: 30px;
      }
    }
  }
}
@keyframes first_bg_moving{
  0%{
    transform: skewX(0deg) translateX(0);
  }
  100%{
    transform: skewX(0deg) translateX(100%);
  }
}
@keyframes first_bg_moving_2{
  0%{
    transform: skewX(0deg);
  }
  100%{
    transform: skewX(-25deg) translateX(-10%);
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
@keyframes scroll_animation{
  0%{
    top: 85%;
  }
  50%{
    top: calc(85% + 15px);
  }
  100%{
    top: 85%;
  }
}
@keyframes loading_mask{
  0%{
    text-shadow: 5px 0px 10px #FFF;
  }
  50%{
    text-shadow: 5px 0px 0px #FFF;
  }
  100%{
    text-shadow: 5px 0px 10px #FFF;
  }
}
@keyframes fadeOut{
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
