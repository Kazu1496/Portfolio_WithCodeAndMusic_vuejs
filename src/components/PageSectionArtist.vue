<template>
  <main>
    <div class="second_bg_color">
      <section id="about_content">
        <div class="section-title">
          <h2 class="is-fadeIn">About Me</h2>
        </div>
        <div class="profile_container">
          <img src="../assets/profile_image2.jpg" class="profile_image" size="150x150">
          <dl>
            <dt>
              K Ishikura a.k.a. Kurenai
            </dt>
            <dd>
              <div class="description">
                <span>Birthday 1997 / 05 / 30</span>
                食をこよなく愛するギタリストコンポーザー。<br>
                ロックでエモーショナルな演奏を得意とする。<br><br>
                12歳の時にバンド活動していた兄の影響でギターを初め、
                15歳の時から、よりギタースキルを効率よく身につけられないかと試行錯誤した結果、動画投稿サイトに自身の演奏動画を公開するという考えに辿りつき、動画投稿を始める。<br><br>
                18歳の頃から様々な世界規模のギターコンテストに参加するようになり、入賞やグランプリ、さらには世界トップ３０のギタリストに選ばれるなど、数々の賞を頂く。またこの頃から本格的にギタリスト作編曲家として活動を始める。<br><br>
                "次世代ギタリスト集団「WhileTrue:」"のメンバーとしても活動している。
              </div>
              <div class="contact">
                <p class="item_title">Contact</p>
                <a href="mailto:ishikura.kazumasa@gmail.com">nico.kurenai@gmail.com</a>
              </div>
            </dd>
          </dl>
        </div>
      </section>
    </div>

    <PageSectionAwards/>
    <PageSectionMovies/>
    <PageSectionArtistWorks/>
    <AppFooter/>
  </main>
</template>

<script>
import AppFooter from './AppFooter'
import PageSectionAwards from './PageSectionAwards'
import PageSectionMovies from './PageSectionMovies'
import PageSectionArtistWorks from './PageSectionArtistWorks'
export default {
  name: 'PageTop',
  components: {
    AppFooter,
    PageSectionAwards,
    PageSectionMovies,
    PageSectionArtistWorks
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
          animation: mask_fadeIn 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
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
          animation: mask_fadeIn 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
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
                margin-bottom: 10px;
              }
              .skills{
                width: 280px;
                margin: 0 auto 20px;
                i{
                  font-size: 30px;
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
