<template>
  <main>
    <section id="portfolio_content">
      <div class="section-title">
        <h2>WORKS</h2>
      </div>
      <!-- <input type="submit" @click="toggleType"> -->
      <div class="portfolio_container" v-if="active">
        <div class="portfolio_card">
          <a href="https://qiitadeck.com/" target="_blank">
            <div class="item_image image1"></div>
            <h3>QiitaDeck</h3>
            <p class="item_description">
              "もっとQiitaで情報収集しやすく！"をコンセプトに「気になる人、気になるタグ、今のトレンド」をリアルタイムウォッチできるWebサービス<br>
            </p>
            <p class="work-tag">Ruby on Rails</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://kurenai-works.com/" target="_blank">
            <div class="item_image image2"></div>
            <h3>With Code and Music</h3>
            <p class="item_description">
              自身のエンジニアとしての活動をまとめたポートフォリオサイト。Vue.js / CSS animationの学習も兼ねて開発。
            </p>
            <p class="work-tag">Vue.js</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://kurenai-works.com/" target="_blank">
            <div class="item_image image3"></div>
            <h3>kurenai-works</h3>
            <p class="item_description">
              初めて０制作した自身のアーティストとしての活動をまとめたポートフォリオサイト。HTML / CSS / JavaScript(jQuery)の学習も兼ねて開発。※閉鎖中<br>
            </p>
            <p class="work-tag">HTML5</p>
            <p class="work-tag">CSS3</p>
            <p class="work-tag">JavaScript (jQuery)</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://github.com/Kazu1496" target="_blank">
            <div class="item_image image4"></div>
            <h3>More GitHub</h3>
            <p class="item_description">
              過去・現在進行系で進んでいるプロジェクト、作品をオープンソースで公開しています<br>
            </p>
          </a>
        </div>
      </div>
      <!-- <div class="portfolio_container" v-else>
        <div class="portfolio_card">
          <a href="https://qiitadeck.com/" target="_blank">
            <div class="item_image image1"></div>
            <h3>QiitaDeck</h3>
            <p class="item_description">
              "もっとQiitaで情報収集しやすく！"をコンセプトに「気になる人、気になるタグ、今のトレンド」をリアルタイムウォッチできるWebサービス<br>
            </p>
            <p class="work-tag">Ruby on Rails</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://kurenai-works.com/" target="_blank">
            <div class="item_image image2"></div>
            <h3>With Code and Music</h3>
            <p class="item_description">
              エンジニア/アーティストポートフォリオサイト<br>
              Vue.js / CSS Animationの学習も兼ねた開発
            </p>
            <p class="work-tag">Vue.js</p>
          </a>
        </div> -->
        <!-- <div class="portfolio_card">
          <a href="https://kurenai-works.com/" target="_blank">
            <div class="item_image image3"></div>
            <h3>kurenai-works</h3>
            <p class="item_description">
              ０からHTML/CSS/JavaScriptを使って初めて作ったサイト<br>
            </p>
            <p class="work-tag">HTML5</p>
            <p class="work-tag">CSS3</p>
          </a>
        </div> -->
        <!-- <div class="portfolio_card">
          <a href="https://github.com/Kazu1496" target="_blank">
            <div class="item_image image4"></div>
            <h3>More GitHub</h3>
            <p class="item_description">
              過去・現在進行系で進んでいるプロジェクト、作品をオープンソースで公開しています<br>
            </p>
          </a>
        </div> -->
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageTop',
  data () {
    return {
      active: true,
      type: 'Engineer'
    }
  },
  methods: {
    toggleType: function () {
      this.active = !this.active
      if (this.type == 'Engineer') {
        this.type = 'Musician'
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
  main{
    overflow: hidden;
    section{
      padding: 30px 0;
      .section-title{
        text-align: center;
        h2{
          position: relative;
          display: inline-block;
          font-size: 30px;
          color: #222;
          letter-spacing: 10px;
        }
        .is-fadeIn::after{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFF;
          transform: scaleX(0);
          animation: mask_fadeIn 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0s;
        }
      }
    }
    #portfolio_content{
      text-align: center;
      .section-title{
        .is-fadeIn::after{
          background-color: #000;
        }
      }
      .portfolio_container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 1000px;
        margin: 0 auto;
        padding: 30px 0;
        .portfolio_card{
          height: 380px;
          width: 380px;
          text-align: left;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
          border: 1px solid #CCC;
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
          transition: box-shadow 0.5s;
          @for $i from 1 through 4{
            a{
              text-decoration: none;
              color: #222;
              .image#{$i}{
                height: 200px;
                background: url("../assets/item_image#{$i}.jpg") no-repeat center;
                background-size: cover;
                border: 1px solid #CCC;
                border-radius: 5px;
              }
              h3{
                margin: 20px 0 0;
              }
              .item_description{
                margin: 20px 0;
              }
              .work-tag{
                display: inline-block;
                color: #FFF;
                background-color: #90201f;
                border-radius: 5px;
                margin: 0;
                padding: 5px 10px;
              }
            }
            &:hover{
              box-shadow: 2px 15px 15px rgba(0,0,0,0.2);
            }
          }
        }
      }
    }
    .contact_content{
      background-color: #90201f;
      padding: 30px 0;
      .section-title{
        .is-fadeIn{
          color: #FFF;
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  main{
    overflow-x: hidden;
    section{
      padding: 20px 0;
      .section-title{
        text-align: center;
        h2{
          position: relative;
          display: inline-block;
          font-size: 25px;
          color: #222;
          letter-spacing: 10px;
        }
        .is-fadeIn::after{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFF;
          transform: scaleX(0);
          animation: mask_fadeIn 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0s;
        }
      }
    }
    #portfolio_content{
      text-align: center;
      .section-title{
        .is-fadeIn::after{
          background-color: #000;
        }
      }
      .portfolio_container{
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        .portfolio_card{
          height: 260px;
          text-align: left;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
          border: 1px solid #CCC;
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
          @for $i from 1 through 4{
            a{
              text-decoration: none;
              color: #222;
              .image#{$i}{
                height: 130px;
                background: url("../assets/item_image#{$i}.jpg") no-repeat center;
                background-size: cover;
                border: 1px solid #CCC;
                border-radius: 5px;
              }
              h3{
                font-size: 15px;
                margin: 10px 0 0;
              }
              .item_description{
                font-size: 12px;
                margin: 5px 0;
              }
              .work-tag{
                display: inline-block;
                color: #FFF;
                font-size: 12px;
                background-color: #90201f;
                border-radius: 5px;
                margin: 0;
                padding: 5px 10px;
              }
            }
          }
        }
      }
    }
    .contact_content{
      background-color: #90201f;
      padding: 30px 0;
      .section-title{
        .is-fadeIn{
          color: #FFF;
        }
      }
    }
  }
}
@keyframes mask_fadeIn {
  0%{
    transform: scaleX(1);
    transform-origin: 100% 0;
  }
  100%{
    transform: scaleX(0);
    transform-origin: 100% 0;
  }
}
</style>
