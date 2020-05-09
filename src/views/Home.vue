<template>
  <div class="homepage">
    <div class="main">
      <div class="sortDropdown">
        <i class="fas fa-sort-down" v-on:click="handleDropClick"></i>
        <div class="dropList" v-bind:style="listDropStyle">
          <a href="#" class="dropdown-item">
            Sort by likes
          </a>
          <a href="#" class="dropdown-item">
            Sort by comments
          </a>
          <a href="#" class="dropdown-item">
            Sort by share
          </a>
        </div>
      </div>

      <div class="body">
        <div class="articleBorder" v-for="story in sortByLikes">
          <h1>{{ story.title }}</h1>
          <p>
            {{ story.body }}
          </p>
          <footer class="LCS">
            <span>
              <i class="fas fa-heart"></i>
              {{ story.likes }}
            </span>
            <span>
              <i class="fas fa-comments"></i>
              {{ story.comments }}
            </span>
            <span>
              <i class="fas fa-share"></i>
              {{ story.shares }}
            </span>
          </footer>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

.main {
  //background-image: url("/images/background.jpg");
  background-color: grey;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height: inherit;
  font-family: "Ubuntu", sans-serif;
  height: 10000px;
}
.nav .title {
  float: left;
  color: white;
  margin-left: 30px;
}
.nav {
  color: white;
  display: inline;
  text-align: center;
  height: 10%;
  width: 100%;
  position: fixed;
  padding: 20px;
  align-items: baseline;
  font-size: 20px;
  background: rgba(17, 17, 17, 0.8);
}
.nav .navRoutes {
  padding: 100px;
  position: relative;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 8px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: red;
  }
  &:before {
    opacity: 0;
    transform: translateY(-$distance);
    transition: transform 0s $easeOutBack, opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY($distance/2);
    transition: transform $duration $easeOutBack, opacity $duration;
  }
  &:hover,
  &:focus {
    color: red;
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:after {
      transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
    }
  }
}

.nav .sideBarBurger {
  font-size: 30px;
  cursor: pointer;
  opacity: 0%;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 10%;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 20px;
  opacity: 80%;
}

.sidenav a {
  padding: 8px 8px 8px 40px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.5s;
}

.sidenav a:hover {
  color: red;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
}
.sortDropdown {
  display: block;
  position: fixed;
  border: 2px solid black;
  background-color: #111;
  background-clip: border-box;
  background: rgba(17, 17, 17, 0.8);
  border-radius: 20px;
  left: 21%;
  top: 11%;
  height: 5%;
  width: 4%;
  font-size: 200%;
  text-align: center;
}
.sortDropdown i {
  color: white;
}
.sortDropdown i:hover {
  color: red;
  cursor: pointer;
}
.sortDropdown .dropList {
  display: block;
  background-color: #111;
  background-clip: border-box;
  border: 2px solid black;
  width: 10rem;
  transition: 0.5s;
  opacity: 0;
}
.sortDropdown .dropList a {
  color: white;
}
.sortDropdown .dropList a:hover {
  color: red;
}

.articleBorder {
  background-color: #111;
  background-clip: border-box;
  border: 2px solid black;
  background: rgba(17, 17, 17, 0.8);
  padding: 20px;
  margin-bottom: 5%;
  border-radius: 10px;
}
.LCS span {
  padding-right: 20px;
}
.LCS i:hover {
  cursor: pointer;
  color: red;
}
</style>

<script>
import compareLikes from "../util.js";
//Array of story objects {title: ,body:} TODO MAYBE AUTHOR? RATING?
//TODO Add a drop down to sort by, likes, comments, shares DONE
//TODO INCRASE NUMBER OF LIKES BY CLICK
//TODO SHOW COMMENTS ON A POST
//TODO SEARCH by Author
//TODO Share videos
export default {
  name: "Home",
  data: function() {
    return {
      optionDrop: false,
      stories: [
        {
          title: "Title",
          body: "Body",
          likes: 14,
          comments: 2,
          shares: 0,
        },
        {
          title:
            "Everything you need to know about Corona is right here on this site hello world",
          //Multi line strings in an object value, use these -> `` (tilda)
          body: `New in 2.1.0+: returns a Promise if no callback is provided and Promise is supported
              in the execution environment. Please note that Vue does not come with a Promise polyfill,
              so if you target browsers that don’t supportPromises natively (looking at you, IE), you will
              have to provide a polyfill yourself.`,
          likes: 32,
          comments: 13,
          shares: 15,
        },
        {
          title: "Title",
          body: "Body",
          likes: 10,
          comments: 16,
          shares: 4,
        },
      ],
      sidNavStyles: {
        width: "0%",
      },
      sideBarBurgerStyle: {
        opacity: "100%",
      },
      listDropStyle: {
        height: "0",
        opacity: "0",
        visibility: "hidden",
      },
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
  methods: {
    openNav: function() {
      this.sidNavStyles.width = "20%";
      this.sideBarBurgerStyle.opacity = "0%";
    },
    closeNav: function() {
      this.sidNavStyles.width = "0%";
      this.sideBarBurgerStyle.opacity = "100%";
    },
    handleDropClick: function() {
      if (this.optionDrop) {
        this.optionDrop = false;
        this.listDropStyle.height = "0";
        this.listDropStyle.visibility = "hidden";
        this.listDropStyle.opacity = "0";
      } else {
        this.optionDrop = true;
        this.listDropStyle.height = "250%";
        this.listDropStyle.visibility = "visible";
        this.listDropStyle.opacity = "100%";
      }
    },
  },
};
</script>
