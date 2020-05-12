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
  computed: {},
  mounted: function() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        this.countries = data;
      })
      .catch((err) => {
        console.log(err);
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
