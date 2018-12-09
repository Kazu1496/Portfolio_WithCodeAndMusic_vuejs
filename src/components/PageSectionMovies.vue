<template>
  <main>
    <section>
      <div class="section-title">
        <h2>Movies</h2>
      </div>
      <!-- <input type="submit" @click="toggleType"> -->
      <div class="portfolio_container" v-if="active">
        <div class="portfolio_card">
          <a href="https://www.youtube.com/watch?v=o-yfzNMn60o" target="_blank">
            <div class="item_image image1"></div>
            <h3>シャウトロック - Shout Rock -</h3>
            <p class="item_description">
              ポップでありながら切なくも訴えかけるギターと歌詞が特徴の一曲<br>
              ※カラオケDAMより配信中
            </p>
            <p class="work-tag">Vocaloid</p>
            <p class="work-tag">v_flower</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://www.youtube.com/watch?v=Xo3PSmFcazY" target="_blank">
            <div class="item_image image2"></div>
            <h3>ステイアライブ - Stay Alive -</h3>
            <p class="item_description">
              エモさ溢れるロックと突き刺さるラップが融合した一曲<br>
              ボーカロイド作品３作目。
            </p>
            <p class="work-tag">Vocaloid</p>
            <p class="work-tag">v_flower</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://www.youtube.com/watch?v=ekjw3jCqzOw" target="_blank">
            <div class="item_image image3"></div>
            <h3>G5 Cover Project 2016 - Free for All -</h3>
            <p class="item_description">
              G5 Cover Project 2016 コンテストエントリー作品<br>
              本作品で、コンテスト最優秀賞である「Best G5 Cover」を受賞
            </p>
            <p class="work-tag">WhileTrue:</p>
            <p class="work-tag">G5 project</p>
          </a>
        </div>
        <div class="portfolio_card">
          <a href="https://www.youtube.com/watch?v=ZHMUvE6z5A4" target="_blank">
            <div class="item_image image4"></div>
            <h3>G5 Cover Project 2016 - Outburst -</h3>
            <p class="item_description">
              G5 Cover Project 2016 コンテストエントリー作品<br>
              本作品で、コンテスト優秀賞である「5th Place G5 Cover」を受賞
            </p>
            <p class="work-tag">G5 project</p>
          </a>
        </div>
      </div>
      <div class="more-link-area">
        <a href="https://www.youtube.com/channel/UCxlAoJglz1U38HFu2UY3AHg" target="_blank">
          More
          <i class="fas fa-caret-down"></i>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ArtistMovies',
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
    background-color: #90201f;
    overflow: hidden;
    section{
      padding: 30px 0 60px;
      .section-title{
        text-align: center;
        h2{
          position: relative;
          display: inline-block;
          font-size: 30px;
          color: #FFF;
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
          background-color: #FFF;
          box-shadow: 3px 3px 3px rgba(0,0,0,0.7);
          border-radius: 10px;
          margin: 20px;
          padding: 20px;
          transition: box-shadow 0.5s;
          @for $i from 1 through 4{
            a{
              text-decoration: none;
              color: #222;
              .image#{$i}{
                height: 190px;
                background: url("../assets/movie_image#{$i}.png") no-repeat center;
                background-size: cover;
                border: 1px solid #CCC;
                border-radius: 5px;
              }
              h3{
                margin: 20px 0 0;
              }
              .item_description{
                margin: 10px 0;
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
      .more-link-area{
        text-align: center;
        a{
          display: inline-block;
          color: #90201f;
          font-size: 20px;
          text-decoration: none;
          background-color: #FFF;
          box-shadow: 3px 3px 3px rgba(0,0,0,0.7);
          border-radius: 5px;
          padding: 5px 20px;
          transition: box-shadow 0.5s;
          &:hover{
            box-shadow: 2px 15px 15px rgba(0,0,0,0.2);
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  main{
    background-color: #90201f;
    overflow-x: hidden;
    section{
      padding: 20px 0 60px;
      .section-title{
        text-align: center;
        h2{
          position: relative;
          display: inline-block;
          font-size: 30px;
          color: #FFF;
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
      .portfolio_container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 300px;
        margin: 0 auto;
        .portfolio_card{
          height: 300px;
          width: 300px;
          text-align: left;
          background-color: #FFF;
          box-shadow: 3px 3px 3px rgba(0,0,0,0.7);
          border-radius: 10px;
          margin: 20px 0;
          padding: 10px;
          transition: box-shadow 0.5s;
          @for $i from 1 through 4{
            a{
              text-decoration: none;
              color: #222;
              .image#{$i}{
                height: 140px;
                background: url("../assets/movie_image#{$i}.png") no-repeat center;
                background-size: cover;
                border-radius: 5px;
              }
              h3{
                font-size: 14px;
                margin: 20px 0 0;
              }
              .item_description{
                font-size: 12px;
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
      .more-link-area{
        text-align: center;
        a{
          display: inline-block;
          color: #90201f;
          font-size: 20px;
          text-decoration: none;
          background-color: #FFF;
          box-shadow: 3px 3px 3px rgba(0,0,0,0.7);
          border-radius: 5px;
          padding: 5px 20px;
          transition: box-shadow 0.5s;
        }
      }
    }
  }
}
</style>
