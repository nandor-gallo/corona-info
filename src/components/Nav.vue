<template>
  <div class="homepage">
    <div class="main">
      <div class="nav">
        <ul>
          <h1 class="title">CoronaCo.info</h1>
          <span class="sideBarBurger" v-on:click="openNav" v-bind:style="sideBarBurgerStyle">&#9776;</span>
          <a class="navRoutes" href="#home" id="home"> Home </a>
          <a class="navRoutes" href="#news" id="news"> News </a>
          <a class="navRoutes" href="http://localhost:8080/Statistics"> Statistics </a>
          <a class="navRoutes"> Preventions </a>

        </ul>
      </div>
      <div class="sidenav" v-bind:style="sidNavStyles">
        <a href="#" class="closebtn" v-on:click="closeNav">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      </div>

      <div>

      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

$duration: .2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);




.main{
  background-image: url('/images/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height: inherit;
  font-family: 'Ubuntu', sans-serif;
  height: 10000px;

}
.nav .title{
  float: left;
  color: white;
  margin-left: 30px;
}
.nav{
  color: white;
  display: inline;
  text-align: center;
  height: 10%;
  width: 100%;
  position:  fixed;
  padding: 20px;
  align-items: baseline;
  font-size: 20px;
  background: rgba(17,17,17,0.8);
}
.nav .navRoutes{
  padding: 100px;
  position: relative;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 8px;
  &:before,
    &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0; right: 0;
        height: 2px;
        background-color: red;
    }
    &:before {
        opacity: 0;
        transform: translateY(- $distance);
        transition: transform 0s $easeOutBack, opacity 0s;
    }
    &:after {
        opacity: 0;
        transform: translateY($distance/2);
        transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:hover,
    &:focus {
      color:red;
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

.nav .sideBarBurger{
  font-size:30px;
  cursor:pointer;
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
</style>


<script>
import compareLikes from '../util.js';
//Array of story objects {title: ,body:} TODO MAYBE AUTHOR? RATING?
//TODO Add a drop down to sort by, likes, comments, shares DONE
//TODO INCRASE NUMBER OF LIKES BY CLICK
//TODO SHOW COMMENTS ON A POST
//TODO SEARCH by Author
//TODO Share videos
export default {
  name: "Navbar",
  data: function(){
    return{
      optionDrop: false,
      stories: [{
        title: "Title",
        body: "Body",
        likes: 14,
        comments: 2,
        shares: 0,
      },{
        title: "Everything you need to know about Corona is right here on this site hello world",
              //Multi line strings in an object value, use these -> `` (tilda)
        body: `New in 2.1.0+: returns a Promise if no callback is provided and Promise is supported
              in the execution environment. Please note that Vue does not come with a Promise polyfill,
              so if you target browsers that don’t supportPromises natively (looking at you, IE), you will
              have to provide a polyfill yourself.`,
        likes: 32,
        comments: 13,
        shares: 15,

      },{
      title: "Title",
      body: "Body",
      likes: 10,
      comments: 16,
      shares: 4,
      }
    ],
      sidNavStyles: {
        width: '0%',
      },
      sideBarBurgerStyle: {
        opacity: '100%',
      },
      listDropStyle: {
        height: '0',
        opacity: '0',
        visibility: 'hidden',
      },
    }

  },
  computed:{
    sortByLikes: function(){
        function compare(a, b){
        let comp = 0;
        if(a.likes > b.likes){
          return  -1;
        }else if(a.likes < b.likes){
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
    sortByShares: function(){
        function compare(a, b){
        let comp = 0;
        if(a.shares > b.shares){
          return  -1;
        }else if(a.shares < b.shares){
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
    sortByComments: function(){
        function compare(a, b){
        let comp = 0;
        if(a.comments > b.comments){
          return  -1;
        }else if(a.comments < b.comments){
          return 1;
        }
        return 0;
      }
      return this.stories.sort(compare);
    },
  },
  methods: {
    openNav: function(){
      this.sidNavStyles.width = '20%';
      this.sideBarBurgerStyle.opacity = '0%';
    },
    closeNav: function(){
      this.sidNavStyles.width = "0%";
      this.sideBarBurgerStyle.opacity = '100%';
    },
    handleDropClick: function(){
      if(this.optionDrop){
        this.optionDrop = false;
        this.listDropStyle.height = '0';
        this.listDropStyle.visibility = 'hidden';
        this.listDropStyle.opacity = '0';
      }else{
        this.optionDrop = true;
        this.listDropStyle.height = '250%';
        this.listDropStyle.visibility = 'visible';
        this.listDropStyle.opacity = '100%';
      }
    }
  }
};
</script>
