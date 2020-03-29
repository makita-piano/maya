<template>
  <v-content>
<div class="col-12">
    <div class="title">
        ディスコグラフィー
    </div>
    <div class="ancher">
        <RouterLink to="/">
            トップページ
        </RouterLink>
        > ディスコグラフィ
    </div>
</div>
<div class="grid disco margin-bottom-1">
  <div class="grid-center col-4_sm-12">
      <div class="grid col-12_sm-9">
          <a href="https://www.youtube.com/watch?v=3XbsjRd2nII" target="_blank">
              <img src="y_01.jpg">
          </a>
      </div>
      <div class="grid col-12">
          <div class="col-12 disco-main-title">
              Youtube／シューマン：森の情景
          </div>
          <div class="col-12 disco-sub-title">
              秋吉台ミュージックアカデミー　菊地裕介個人レッスン　
          </div>
          <div class="col-12 disco-year">
              2020.03.25
          </div>
      </div>
  </div>
</div>
<!--
    <div class="grid-center col-4_sm-12">
        <div class="grid col-12_sm-9">
            <a href="https://www.youtube.com/watch?v=3XbsjRd2nII">
                <img src="/images/y_01.jpg">
            </a>
        </div>
        <div class="grid col-12">
            <div class="col-12">
                <a href="#">
                    <div class="disco-bar"><span></span></div>
                    <div class="disco-pointer"><img width="7" src="pointer.png"></div>
                </a>
            </div>
            <div class="col-12 disco-main-title">
                ドビュッシー：ベルガマスク組曲、12のエチュード
            </div>
            <div class="col-12 disco-sub-title">
                フレンチピアニズムを継承するピアニスト菊地裕介が描くドビュッシー
            </div>
            <div class="col-12 disco-year">
                2019.07.14
            </div>
        </div>
    </div>
    <div class="grid-center col-4_sm-12">
        <div class="grid col-12_sm-9">
            <a href="#">
                <img src="piano_kuma.png">
            </a>
        </div>
        <div class="grid col-12">
            <div class="col-12">
                <a href="#">
                    <div class="disco-bar"><span></span></div>
                    <div class="disco-pointer"><img width="7" src="pointer.png"></div>
                </a>
            </div>
            <div class="col-12 disco-main-title">
                ドビュッシー：ベルガマスク組曲、12のエチュード
            </div>
            <div class="col-12 disco-sub-title">
                フレンチピアニズムを継承するピアニスト菊地裕介が描くドビュッシー
            </div>
            <div class="col-12 disco-year">
                2019.07.14
            </div>
        </div>
    </div>
    <div class="grid-center col-4_sm-12">
        <div class="grid col-12_sm-9">
            <a href="#">
                <img src="piano_inu.png">
            </a>
        </div>
        <div class="grid col-12">
            <div class="col-12">
                <a href="#">
                    <div class="disco-bar"><span></span></div>
                    <div class="disco-pointer"><img width="7" src="pointer.png"></div>
                </a>
            </div>
            <div class="col-12 disco-main-title">
                主タイトル
            </div>
            <div class="col-12 disco-sub-title">
                福タイトル
            </div>
            <div class="col-12 disco-year">
                2019.07.14
            </div>
        </div>
    </div>
-->
</div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "Discography | 加々見 茉耶"
      const description = "加々見 茉耶 official pageのディスコグラフィーです。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
      document.title = title
      document.querySelector("meta[property='og:title']")
      　.setAttribute('content', title)
      document.querySelector("meta[name='description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:description']")
      　.setAttribute('content', description)
    }
  }
</script>
