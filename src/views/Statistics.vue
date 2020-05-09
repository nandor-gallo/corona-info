<template>
  <div>
    <div class="body">
      <div class="main">
        <h1>Country</h1>
        <h6>Country Code</h6>
        <br />
        <h2>Confirmed Cases</h2>
        <h2>Total Recoverd</h2>
        <h2>Total Deaths</h2>
        <p>{{ countryName }}</p>
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
      countryName: "Hello",
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
        console.log(data);
        console.log(data.Countries[0]);
        console.log(data.Countries[0].Country);
        console.log(data.Countries[0].CountryCode);
        console.log(data.Countries[0].TotalConfirmed);
        console.log(data.Countries[0].TotalDeaths);
        console.log(data.Countries[0].TotalRecovered);
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
