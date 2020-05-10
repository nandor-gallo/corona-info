<template>
  <div>
    <div class="body">
      <div class="main" v-for="item in countries.Countries">
        <h1>{{ item.Country }}</h1>

        <h6>{{ item.CountryCode }}</h6>
        <br />
        <h2>Confirmed Cases: {{ item.TotalConfirmed }}</h2>
        <h2>Total Recoverd: {{ item.TotalRecovered }}</h2>
        <h2>Total Deaths: {{ item.TotalDeaths }}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background-color: white;
  color: black;
  text-align: center;
}
</style>
<script>
import compareLikes from "../util.js";

export default {
  name: "Statistics",
  data: function() {
    return {
      countries: [],
    };
  },
  computed: {
    sortByLikes: function() {
      function compare(a, b) {
        let comp = 0;
        if (a.likes > b.likes) {
          return -1;
        } else if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
    sortByShares: function() {
      function compare(a, b) {
        let comp = 0;
        if (a.shares > b.shares) {
          return -1;
        } else if (a.shares < b.shares) {
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
    sortByComments: function() {
      function compare(a, b) {
        let comp = 0;
        if (a.comments > b.comments) {
          return -1;
        } else if (a.comments < b.comments) {
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
  },
  mounted: function() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        this.countries = data;
        console.log(this.countries);
      });
  },
  methods: {
    openNav: function() {
      this.sidNavStyles.width = "20%";
      this.sideBarBurgerStyle.opacity = "0%";
    },
  },
};
</script>
