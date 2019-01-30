<template>
  <main>
    <section id="portfolio_content">
      <div class="section-title">
        <h2 class="is-fadeIn">Works</h2>
      </div>
      <ul>
        <li>
          <div class="item_image image1"></div>
          <div class="portfolio_item">
            <h3>Nataria:Code<span class="artist_name">WHITEFISTS</span></h3>
            <p class="item_description">
              ■ 曲名　World Requiem<br>
              ■ 担当　ギターソロ
            </p>
            <a href="https://goo.gl/VgeuaG" target="_blank">SoundCloud</a>
          </div>
        </li>
        <li>
          <div class="item_image image2"></div>
          <div class="portfolio_item">
            <h3>One For All , All For One<span class="artist_name">WhileTrue:</span></h3>
            <p class="item_description">
              ■ Tr1 作編曲 / Mix<br>
              ■ Tr3 ギターソロ / Mix<br>
              ■ Tr5 ギターソロ
            </p>
            <a href="https://t.co/nvC63MX2Sn" target="_blank">Spotify</a>
            <a href="https://whiletruejpn.tumblr.com/" target="_blank">Official Site</a>
          </div>
        </li>
        <li>
          <div class="item_image image3"></div>
          <div class="portfolio_item">
            <h3>ぬけがら<span class="artist_name">優月心菜</span></h3>
            <p class="item_description">
              ■曲名　ぬけがら<br>
              ■担当　ギターアレンジ
            </p>
            <a href="https://goo.gl/rtfnmB" target="_blank">Official Site</a>
          </div>
        </li>
        <li>
          <div class="item_image image4"></div>
          <div class="portfolio_item">
            <h3>囲碁健康体操</h3>
            <p class="item_description">
              ■曲名　Breaking!, Fusion LaBo, Slow up<br>
              ■担当　楽曲提供（作編曲）
            </p>
            <a href="http://igo-official.net/" target="_blank">Official Site</a>
          </div>
        </li>
        <li>
          <div class="item_image image5"></div>
          <div class="portfolio_item">
            <h3>ホラガイ<span class="artist_name">ひこまろ</span></h3>
            <p class="item_description">
              ■曲名　せかい<br>
              ■担当　ギターソロ
            </p>
            <a href="https://goo.gl/8u0jny" target="_blank">Niconico</a>
          </div>
        </li>
        <li>
          <div class="item_image image6"></div>
          <div class="portfolio_item">
            <h3>GAME<span class="artist_name">Solomon</span></h3>
            <p class="item_description">
              ■曲名　儚-hakana-<br>
              ■担当　ギターソロ
            </p>
            <a href="https://goo.gl/wVVeZN" target="_blank">Official Site</a>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageSectionArtistWorks'
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
      ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 800px;
        margin: 0 auto;
        padding: 30px 0;
        li{
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 800px;
          text-align: left;
          list-style: none;
          border-bottom: 1px solid #CCC;
          margin: 0 auto;
          padding: 20px 0;
          &:first-child{
            border-top: 1px solid #CCC;
          }
          @for $i from 1 through 6{
            color: #222;
            .image#{$i}{
              height: 200px;
              width: 200px;
              background: url("../assets/artist_image#{$i}.jpg") no-repeat center;
              background-size: cover;
              margin-left: 100px;
            }
            .portfolio_item{
              width: 400px;
              margin-left: 50px;
              h3{
                margin: 0;
                .artist_name{
                  color: #888;
                  font-size: 14px;
                  margin-left: 10px;
                }
              }
              .item_description{
                margin: 20px 0;
              }
              a{
                display: inline-block;
                color: #FFF;
                text-decoration: none;
                background-color: #90201f;
                box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
                border-radius: 5px;
                margin: 0;
                padding: 5px 10px;
                transition: box-shadow 0.2s;
                &:hover{
                  box-shadow: 2px 5px 5px rgba(0,0,0,0.4);
                }
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
      ul{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        padding: 30px 0;
        li{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          text-align: left;
          list-style: none;
          border-bottom: 1px solid #CCC;
          margin: 0 auto;
          padding: 20px 0;
          &:first-child{
            border-top: 1px solid #CCC;
          }
          @for $i from 1 through 6{
            color: #222;
            .image#{$i}{
              height: 150px;
              width: 150px;
              background: url("../assets/artist_image#{$i}.jpg") no-repeat center;
              background-size: cover;
              margin-left: 10px;
            }
            .portfolio_item{
              width: 300px;
              margin-left: 20px;
              h3{
                font-size: 13px;
                margin: 0;
                .artist_name{
                  color: #888;
                  font-size: 10px;
                  margin-left: 10px;
                }
              }
              .item_description{
                font-size: 12px;
                margin: 10px 0;
              }
              a{
                display: inline-block;
                color: #FFF;
                font-size: 11px;
                text-decoration: none;
                background-color: #90201f;
                box-shadow: 2px 2px 2px rgba(0,0,0,0.7);
                border-radius: 5px;
                margin: 0;
                padding: 3px 10px;
                transition: box-shadow 0.2s;
                &:hover{
                  box-shadow: 2px 5px 5px rgba(0,0,0,0.4);
                }
              }
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 640px){
  main{
    section{
      .section-title{
        h2{
          font-size: 25px;
        }
      }
      ul{
        width: 300px;
        li{
          width: 300px;
          @for $i from 1 through 6{
            .image#{$i}{
              height: 100px;
              width: 100px;
            }
            .portfolio_item{
              width: 170px;
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
