<template>
  <v-content>
 <div class="col-12">
    <div class="title">
        お知らせ
    </div>
    <div class="ancher">
        <RouterLink to="/">
            トップページ
        </RouterLink>
        > お知らせ
    </div>
</div>
<div style="padding: 2rem .5rem 1rem;background-color: #eee">
    <ul class="information">
    <li>
      <div class="col-12">2019.11.28</div>
      <div class="grid col-12">
        <div class="col-12" style="text-decoration: none">完全帰国＆1st CD発売記念リサイタル</div>
      </div>
      <div style="padding-left: 2rem;">
    2020年2月21日(金)<br>
    18:30開場 19:00開演<br>
    カワイ表参道コンサートサロン パウゼ<br>
    お申し込みは
    <a href="https://docs.google.com/forms/d/19VN4kaN6ggv7tesPF34Dw_HOr-mJ9HXsrgh5M37KRw4/viewform"><span style="
    text-decoration: underline;
">こちら</span></a>
      </div>

       </li>
        <li>
            <div class="col-12">
                2019.11.28
            </div>
            <div class="grid col-12">
                    <div class="col-12" style="text-decoration: none">
                        official pageが公開されました
                    </div>
            </div>
        </li>
    </ul>
</div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "Information | 加々見 茉耶"
      const description = "加々見 茉耶 official pageのお知らせ一覧です。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
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
