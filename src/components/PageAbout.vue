<template>
  <main>
    <div class="second_bg_color">
      <section id="about_content">
        <div class="section-title">
          <h2>ABOUT US</h2>
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
                大学3年になったとき、アーティストとしての活動実績をまとめたポートフォリオサイトを作りたいと思い、プラグラミングに対する興味が湧き、独学でHTML/CSS/JavaScriptを身につける。<br><br>
                業務では主にRubyOnRails/jQueryを用いたフロントエンド開発を担当しており、趣味でVue.js/ReactNativeなどに触れている。
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
                <p>ishikura.kazumasa@gmail.com</p>
              </div>
            </dd>
          </dl>
        </div>
      </section>
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
              }
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
