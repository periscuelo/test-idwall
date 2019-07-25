<template>
  <div class="home" v-if="data.length>0">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h2>
          THE <strong>IDDOG</strong>
        </h2>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <div id="nav">
          <vs-button color="primary" type="border" icon="pets" @click="changeCat('husky')">
            Husky
          </vs-button>
          <vs-button color="primary" type="border" icon="pets" @click="changeCat('hound')">
            Hound
          </vs-button>
          <vs-button color="primary" type="border" icon="pets" @click="changeCat('pug')">
            Pug
          </vs-button>
          <vs-button color="primary" type="border" icon="pets" @click="changeCat('labrador')">
            Labrador
          </vs-button>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-offset="2" vs-w="8">
        <div class="con-example-images">
          <div
            v-for="(image, index) in data"
            :key="index"
            @click="show(index)">
            <vs-image :src="image"/>
            <vs-popup
              :style="{ textAlign: 'center' }"
              :title="catUc"
              :active.sync="popupActivo[index]">
              <img :src="image"/>
            </vs-popup>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import FeedsService from '@/services/feeds';

export default {
  name: 'home',
  data: () => ({
    category: 'husky',
    data: [],
    ids: [],
    popupActivo: [],
  }),
  created() {
    if (this.$route.query.category !== undefined) {
      this.category = this.$route.query.category;
    }
    this.getFeed();
  },
  computed: {
    catUc() {
      return `${this.category.charAt(0).toUpperCase()}${this.category.slice(1)}`;
    },
  },
  methods: {
    async getFeed() {
      try {
        const feeds = await FeedsService.getFeeds(this.category);
        this.category = feeds.data.category;
        this.data = feeds.data.list;
        this.ids = feeds.data.list.map(val => parseInt(/_\d+/.exec(val)[0].substring(1), 10));
        this.popupActivo = Array(...Array(this.data.length)).map(Boolean.prototype.valueOf, false);
      } catch (error) {
        console.log(error);
      }
    },
    changeCat(cat) {
      this.category = cat;
      this.getFeed();
    },
    show(index) {
      this.popupActivo[index] = !this.popupActivo[index];
      this.popupActivo = Object.assign({}, this.popupActivo);
      this.$router.push(`?category=${this.category}&id=${this.ids[index]}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.vs-button ::v-deep {
  margin-right: 0.3125rem;
}
.home {
  padding-top: 1.875rem;
}
#nav {
  padding: 1.875rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
