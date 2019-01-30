<template>
  <main>
    <section>
      <div class="section-title">
        <h2 class="is-fadeIn">Awards</h2>
      </div>
      <ul>
        <li>
          <p class="award-date">2017 / 08</p>
          <h3>Kiesel Guitar Solo Contest 2017 TOP30</h3>
        </li>
        <li>
          <p class="award-date">2016 / 12</p>
          <h3>G5 Cover Project 2016 Best Cover G5</h3>
        </li>
        <li>
          <p class="award-date">2016 / 12</p>
          <h3>G5 Cover Project 2016 5th Place</h3>
        </li>
        <li>
          <p class="award-date">2016 / 08</p>
          <h3>Kiesel Guitar Solo Contest 2016 TOP30</h3>
        </li>
        <li>
          <p class="award-date">2016 / 07</p>
          <h3>Play like G.O.D.111 Runners Up</h3>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ArtistAwards',
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
      padding: 30px 0 60px;
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
        width: 800px;
        margin: 0 auto;
        li{
          display: flex;
          flex-direction: row;
          align-items: center;
          list-style: none;
          p{
            margin-right: 40px;
          }
          h3{
            font-size: 20px;
            letter-spacing: 3px;
          }
          &::after{
            content: "";
            border: 1px dashed #90201f;
            flex-grow: 1;
            margin-left: 40px;
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px){
  main{
    width: 100%;
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
        width: 100%;
        text-align: center;
        margin: 20px auto 0;
        padding: 0;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          margin-bottom: 20px;
          h3{
            font-size: 15px;
            letter-spacing: 3px;
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
        width: 280px;
      }
    }
  }
}
</style>
