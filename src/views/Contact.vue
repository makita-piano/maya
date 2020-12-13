<template>
  <v-content>
<div class="col-12">
    <div class="title">
        お問い合わせ
    </div>
    <div class="ancher">
        <RouterLink to="/">
            トップページ
        </RouterLink>
         > お問い合わせ
    </div>
</div>
<div style="text-align: center;padding: 1rem;background-color: #eee">
　お問い合わせは以下のアドレスにお送りください。<br>
  mail@ykpianoforte.com
</div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "Contact | 加々見 茉耶"
      const description = "加々見 茉耶 official pageのお問合せページです。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
      document.title = title
      document.querySelector("meta[property='og:title']")
      　.setAttribute('content', title)
      document.querySelector("meta[name='description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:url']")
      　.setAttribute('content', "https://kagamimaya.klavier.page")
    }
  }
</script>
