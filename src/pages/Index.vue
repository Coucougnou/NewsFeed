<template>
  <div class="q-pa-md q-gutter-sm">
    <q-parallax :height="150">
      <template v-slot:media>
        <video poster="https://player.vimeo.com/external/144355017.mobile.mp4?s=33c6be1d3e6f3e052d948e86d234d5548b15ae20&profile_id=116" autoplay loop muted>
          <source type="video/webm" src="https://player.vimeo.com/external/144355017.mobile.mp4?s=33c6be1d3e6f3e052d948e86d234d5548b15ae20&profile_id=116">
          <source type="video/mp4" src="https://player.vimeo.com/external/144355017.mobile.mp4?s=33c6be1d3e6f3e052d948e86d234d5548b15ae20&profile_id=116">
        </video>
      </template>

      <h4 class="text-white text-center" style="font-family:Montserrat;"><strong>NewsFeed</strong> numéro 1 sur l'info</h4>
    </q-parallax>
  </div>
  <div class="container">
    <div class="searchbar">
      <form @submit.prevent="fetchSearchNews">
        <q-input outlined type="text" style="font-family:Montserrat;font-size:18px;" placeholder="Une recherche..." v-model="searchword" @keyup.esc="clearMessage">
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>
        
        </q-input>     
      </form>
      
    </div>
    <div class="result-list" style="font-family:MontSerrat;">
      <article v-for="(article, index) in articles" :key="index" @click="navTo(article.url)">
        <header>
          <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
          <i v-else class="fas fa-image"></i>
        </header>
        <section v-html="article.title"></section>
        <footer>
          <i class="fas fa-chevron-right"></i>
        </footer>
      </article>
    </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'apiKey'
    ],
    data: () => {
      return {
        apiKey: '1fd94f27e53f46b5becbc29bc57ab427',
        apiUrl: '',
        isBusy: false,
        showloader: false,
        currentPage: 1,
        totalResults: 0,
        maxPerPage: 20,
        searchword: '',
        articles: [],
        country: 'fr',
      }
    },
    computed: {
      pageCount() {
        return Math.ceil(this.totalResults/this.maxPerPage);
      }
    },
    methods: {
      navTo(url) {
        window.open(url);
      },
      resetData() {
        this.currentPage = 1;
        this.articles = [];
      },
      fetchSearchNews() {
        if(this.searchword !== '')
        {
          this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
          this.isBusy = true;
          this.resetData();
          this.fetchData();
        }
        else {
          this.fetchTopNews();
        }
      },
      fetchTopNews() {
        this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + this.apiKey;
        this.isBusy = true;
        this.searchword = '';
        
        this.resetData();
        this.fetchData();
      },
      fetchData() {
        let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults;
            data.articles.forEach(element => {
              this.articles.push(element);
            });
            this.isBusy = false;
            this.showloader = false;
          })
          .catch((error) => {
            console.log(error);
          })
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
              this.showloader = true;
              this.currentPage += 1;
              this.fetchData();
            }
          });
        });
        observer.observe(this.$refs.infinitescrolltrigger);
      },
      clearMessage() {
          this.searchword = ''
        },
    },
    created() {
      this.fetchTopNews();
    },
    mounted() {
      this.scrollTrigger();
    },
    
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;

    .result-list {
      padding-top:80px;
    }
    article {
      display: grid;
      grid-template-columns: 200px auto 40px;
      grid-template-rows: 100px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      cursor: pointer;
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          max-width: 100%;
          height: auto;
        }
        i {
          font-size: 2rem;
        }
      }
      section {
        margin: 0;
        padding: 10px;
        height: 100px;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #888;
      }
    }
    #scroll-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 1.6rem;
    }
  }
</style>