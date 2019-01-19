<template>
  <main>
    <div class="second_bg_color">
      <section id="about_content">
        <div class="section-title">
          <h2 class="is-fadeIn">About Me</h2>
        </div>
        <div class="profile_container">
          <img src="../assets/profile_image.jpg" class="profile_image" size="150x150">
          <dl>
            <dt>
              Kazumasa Ishikura
            </dt>
            <dd>
              <div class="description">
                <span>Birthday 1997 / 05 / 30</span>
                フロントエンドエンジニア、ギタリストとして活動している食をこよなく愛する大学生<br><br>
                初めてプログラミングに対して興味をもったのが高校２年の時。エンジニアとして活躍する兄が、黒い画面に文字を入力するだけで、ゲームやWebサイトが出来上がっていくのをみて、自分もやってみたい！カッコイイ！と思ったのが始まり。
                しかし、始めた当初は音楽活動に熱中していたこともあって、Ｃ言語をほんの少しかじった程度でプログラミングに対する熱が冷めてしまう。<br><br>
                音楽活動がある程度落ち着いてきたときに、アーティストとしての活動実績をまとめたポートフォリオサイトを作りたいと思ったのがきっかけで、独学でHTML5/CSS3/JavaScriptを身につける。
                ポートフォリオサイトを作りきったときにコーディングの楽しさを改めて感じ、プログラミングに対する興味が再燃した。<br><br>
                普段は、RubyOnRails/Javascript(jQuery, Vue.js)を用いて開発をしている。
              </div>
              <div class="skills">
                <p class="item_title">Skills</p>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js"></i>
                <i class="fas fa-gem"></i>
                <i class="fab fa-vuejs"></i>
                <i class="fab fa-github-square"></i>
              </div>
              <div class="contact">
                <p class="item_title">Contact</p>
                <a href="mailto:ishikura.kazumasa@gmail.com">ishikura.kazumasa@gmail.com</a>
              </div>
            </dd>
          </dl>
        </div>
      </section>
    </div>
    <section id="portfolio_content">
      <div class="section-title">
        <h2>Works</h2>
      </div>
      <div class="portfolio_container">
        <div class="portfolio_card">
          <a href="https://ekichika.herokuapp.com/" target="_blank">
            <div class="item_image image1"></div>
            <h3>エキチカ！</h3>
            <p class="item_description">
              「第二回東京公共交通オープンデータチャレンジ」エントリー作品。
              駅周辺の知りたい施設情報を簡単に調べることができるアプリ。
            </p>
            <p class="work-tag">Django</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="javascript:void(0)" target="_blank">
            <div class="item_image image2"></div>
            <h3>With Code and Music</h3>
            <p class="item_description">
              自身のエンジニアとしての活動をまとめたポートフォリオサイト。Vue.js / CSS animationの学習も兼ねて開発。
            </p>
            <p class="work-tag">Vue.js</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://qiitadeck.com/" target="_blank">
            <div class="item_image image3"></div>
            <h3>QiitaDeck</h3>
            <p class="item_description">
              "もっとQiitaで情報収集しやすく！"をコンセプトに「気になる人、気になるタグ、今のトレンド」をリアルタイムウォッチできるWebサービス<br>
            </p>
            <p class="work-tag">Ruby on Rails</p>
            <p class="work-tag">jQuery</p>
            <p class="work-tag">GAS</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="javascript:void(0)" target="_blank">
            <div class="item_image image4"></div>
            <h3>Kurenai-works</h3>
            <p class="item_description">
              初めて０制作した自身のアーティストとしての活動をまとめたポートフォリオサイト。HTML / CSS / JavaScript(jQuery)の学習も兼ねて開発。※閉鎖中<br>
            </p>
            <p class="work-tag">HTML5</p>
            <p class="work-tag">CSS3</p>
            <p class="work-tag">JavaScript</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://github.com/Kazu1496" target="_blank">
            <div class="item_image image5"></div>
            <h3>More GitHub</h3>
            <p class="item_description">
              過去・現在進行系で進んでいるプロジェクト、作品をオープンソースで公開しています<br>
            </p>
          </a>
        </div>
      </div>
    </section>
    <AppFooter/>
  </main>
</template>

<script>
import AppFooter from './AppFooter'
export default {
  name: 'PageTop',
  components: {
    AppFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media all and (min-width: 769px){
  main{
    width: 100vw;
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
    .second_bg_color{
      background-color: #90201f;
      #about_content{
        h2{
          color: #FFF;
        }
        .profile_container{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0 auto;
          padding: 30px 0;
          .profile_image{
            height: 150px;
            width: 150px;
            border-radius: 100%;
            object-fit: cover;
            margin-right: 65px;
          }
          dl{
            color: #FFF;
            margin-left: 50px;
            dt{
              font-size: 23px;
              font-weight: bold;
            }
            dd{
              width: 500px;
              margin: 0;
              span{
                display: block;
                font-size: 12px;
                margin-bottom: 30px;
              }
              .description{
                margin-bottom: 30px;
              }
              .item_title{
                font-size: 23px;
                font-weight: bold;
                margin-bottom: 20px;
              }
              .skills{
                i{
                  font-size: 30px;
                  text-align: left;
                  margin-right: 20px;
                }
              }
              .contact{
                width: 280px;
                margin-top: 30px;
                a{
                  color: #FFF;
                  text-decoration: none;
                  &:hover{
                    opacity: 0.7;
                  }
                }
              }
            }
          }
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
          box-shadow: 3px 3px 3px rgba(0,0,0,0.7);
          border: 1px solid #CCC;
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
          transition: box-shadow 0.5s;
          @for $i from 1 through 5{
            a{
              text-decoration: none;
              color: #222;
              .image#{$i}{
                height: 190px;
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
              box-shadow: 3px 15px 15px rgba(0,0,0,0.2);
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  main{
    overflow-x: hidden;
    section{
      padding: 30px 0;
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
    .second_bg_color{
      background-color: #90201f;
      #about_content{
        h2{
          color: #FFF;
        }
        .profile_container{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0 auto;
          padding: 20px 0;
          .profile_image{
            height: 150px;
            width: 150px;
            border-radius: 100%;
            object-fit: cover;
          }
          dl{
            color: #FFF;
            text-align: center;
            dt{
              font-size: 23px;
              font-weight: bold;
            }
            dd{
              width: 500px;
              margin: 0;
              span{
                display: block;
                font-size: 12px;
                margin-bottom: 30px;
              }
              .description{
                width: 280px;
                font-size: 13px;
                margin: 0 auto 30px;
              }
              .item_title{
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
              }
              .skills{
                width: 280px;
                margin: 0 auto 20px;
                i{
                  font-size: 25px;
                  margin: 0 10px;
                }
              }
              .contact{
                width: 280px;
                font-size: 15px;
                margin: 20px auto 0;
                a{
                  color: #FFF;
                  text-decoration: none;
                }
              }
            }
          }
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
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        .portfolio_card{
          width: 300px;
          height: 280px;
          text-align: left;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
          border: 1px solid #CCC;
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
          @for $i from 1 through 5{
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
                font-size: 11px;
                margin: 15px 0;
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
