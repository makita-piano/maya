<template>
  <v-content>
    <div class="col-12" style="text-align: center;font-weight: bold;font-size: 1.3rem;margin-top: 1rem">
      加々見 茉耶
    </div>
    <div class="col-12" style="text-align: center;font-weight: bold">
        official page
    </div>
    <div class="align-center margin-bottom-3">
      <img id="top-jpg" src="kagamimaya.jpg" style="padding: 1rem" alt="kagamimaya-image">
    </div>
    <div class="grid col-12 margin-bottom-2">
      <div class="grid-top-center col-6_sm-12 padding-0-12-pc padding-0-05-mobile">
        <div class="col-12 h3">
          Information
        </div>
        <ul class="index-information col-12" v-for="e in info" v-bind:key="e.title">
          <li>
            <div class="col-12">{{date_formated(e.release_date)}}</div>
            <div class="grid col-12">
              <div class="col-12">{{e.title}}</div>
            </div>
            <div v-html="e.texts" style="padding-left: 1.7rem;">
            </div>
          </li>
        </ul>
        <div class="index-information-list">
          <RouterLink to="/information">
              一覧
          </RouterLink>
        </div>
      </div>
      <div class="grid-top col-6_sm-12 padding-0-12-pc padding-0-05-mobile">
        <div class="col-12 h3 margin-top-2-mobile">
          SNS Acount
        </div>
        <div class="col-12">
          <ul class="grid social">
            <li class="col-6_sm-12">
              <div class="insta">
                <a href="https://www.instagram.com/maya_kagami/" target="_blank"  class="grid">
                  <div class="col-1 social-icon">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div class="col social-text">
                    <div>Instagram</div>
                    <div class="social-name">@maya_kagami</div>
                  </div>
                </a>
              </div>
            </li>
            <li class="col-6_sm-12">
              <div class="twitter">
                <a href="https://twitter.com/mayakagami" target="_blank"  class="grid">
                  <div class="col-1 social-icon">
                    <img src="twitter_white.png">
                  </div>
                  <div class="col social-text">
                    <div>Twitter</div>
                    <div class="social-name">@mayakagami</div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-content>
</template>

<script>
  import axios from 'axios'
  import moment from "moment";

  export default {

    data () {
      return {
        info: undefined,
      }
    },

    mounted(){
      const title = "加々見 茉耶 official page"
      const description = "加々見 茉耶(かがみ まや)の公式ページ。ピアニスト。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。 "
      document.title = title
      document.querySelector("meta[property='og:title']")
      　.setAttribute('content', title)
      document.querySelector("meta[name='description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:description']")
      　.setAttribute('content', description)
    },

    created(){
      axios
        .get("https://klavier.microcms.io/api/v1/m_info?fields=title,texts,release_date&limit=2",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.info = v.data.contents;
      });
    },

    methods: {
      date_formated: function(date) {
        return moment(date).format("YYYY.MM.DD");
      }
    }
  }
</script>
