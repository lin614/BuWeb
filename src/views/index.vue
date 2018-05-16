<template>
 
  <div class="page-container">
    <!-- <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight"> -->
   <md-content id="page1">
    <div class="md-layout md-gutter page1-1">
      <div class="md-layout-item md-size-30"> <img src="../imgs/logo.png" /></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item md-size-10">
        <md-menu md-size="small" md-align-trigger>
          <md-button md-menu-trigger>
            <img :src="imgs[lanImg].lan" />
          </md-button>

          <md-menu-content>
            <md-list-item class="panel" @click="handleStart(img)" v-for="img in lanImgs" :key="img">
              <img :src="imgs[img].lan" />
            </md-list-item>
          </md-menu-content>
        </md-menu>
      </div>
    </div>
    <div class="notice">
      <div ><img src="../imgs/exchangechain.png" /></div>
      <!-- class="animated infinite bounce" -->
      <div transition="fadeLeft"> <img :src="imgs[lanImg].jys" style="width:100%" /></div>
      <div class="animated"><img :src="imgs[lanImg].ico" style="width:60%" /></div>
      <div><img :src="imgs[lanImg].email" style="width:50%" /></div>
    </div>
  </md-content>
  <md-content id="page2">
     <div> <img :src="imgs[lanImg].center" class="full"/></div>
  </md-content>
   <md-content id="page3">
    <div class="hx" style="width:100%">
     <img :src="imgs[lanImg].hx"/>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-qukuailian"></i></div></div>
     <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-mianfeiICO" ></i></div></div>
      <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-kaifangxing" ></i></div></div>
       <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-toumingkexin"></i></div></div>
        <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-diyongjin" ></i></div></div>
         <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-gaoanquanxing" ></i></div></div>
           <div class="md-layout-item"><div class="btnHx"><i class="test2 iconfont icon-kuaisuqueren"></i></div></div>
    </div>
     <md-content class="info">
     <div> <img :src="imgs[lanImg].info" class="full"/></div>
  </md-content>
  </md-content>
  <md-content id="page4">
     <div> <img :src="imgs[lanImg].foot" class="full"/></div>
  </md-content>
    <md-content id="page5">
    <div class="lx" style="width:100%">
     联系方式
    </div>
    <div class="md-layout md-gutter footBar">
      <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-weibo"></i></div></div>
     <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-youxiang" ></i></div></div>
      <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-Github" ></i></div></div>
       <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-facebook"></i></div></div>
        <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-twitter" ></i></div></div>
         <div class="md-layout-item"><div class="btnLx"><i class="test2 iconfont icon-telegram" ></i></div></div>
    </div>
    
  </md-content>
   <!-- </transition-group> -->
  </div>

</template>

<script>

import imgs from '../imgs/img.js'
export default {
  data() {
    return {
      lanImg: 'cn',
      lanImgs: ['en', 'cn', 'jp', 'ko'],
      imgs: imgs
    }
  },
  methods: {
    handleStart(img) {
      this.lanImg = img
    }
  }
}
</script>

<style>
.btnHx{
  transition: all 0.3s;  
  width:7em;
  height:7em;
   background: url(../imgs/small.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
    align-items: center;
   cursor:pointer;
  border:none;
   
}
.btnHx:hover{
  transform: scale(1.7);  
   background: url(../imgs/big.png);
    background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
    align-items: center;
    /* color:blue; */
}
.btnHx>i{
  color:white;
  font-size:4em
}
.btnHx:hover>i{
   color:#557cff;
}
.full{
  width:100%;
  /* height:80%; */
}

#page1 {
  padding-top: 3vh;
  height: 75vmin;
  background: url(../imgs/w-top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-content: center;
  padding: 3vh 15vw;
}

.md-list {
  padding: 0;
  background-color: rgb(29, 15, 43);
}
.notice {
  padding: 5% 15%;
}
.notice > div {
  padding-bottom: 5vh;
}
.notice > div:nth-child(3),.notice > div:nth-child(4)  {
  text-align: center;
  padding: 0 5vh;
  padding-bottom: 5vh;
}
.notice p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
  color: white;
  text-align: center;
}
#page2 {
  padding: 7vh 15vw;
  /* height: 50vh; */
}
#page3 {
  padding: 3vh 15vw;
  background-color: #557cff;
  /* height: 50vh; */
}
.hx{
  display: inline-flex;
  justify-content: flex-end;
  /* align-items: center; */
  padding:5vh 0;
}
.info{
  padding:5vh
}
#page4 {
  padding-top: 3vh;
  height: 40vmin;
  background: url(../imgs/b-bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-content: center;
  padding: 3vh 15vw;
  display: flex;
  justify-content: center;
    align-items: center;
}
#page5 {
  padding: 3vh 15vw;
  background-color: #333333;
  /* height: 50vh; */
}
.btnLx{
  transition: all 0.3s;  
  width:4em;
  height:4em;
   background: url(../imgs/small2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
    align-items: center;
   cursor:pointer;
  border:none;
   
}
.btnLx:hover{
  transform: scale(1.5);  
   background: url(../imgs/big.png);
    background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
    align-items: center;
    /* color:blue; */
}
.btnLx>i{
  color:white;
  font-size:2em
}
.btnLx:hover>i{
   color:#000;
}
.footBar{
  padding:3vh 10vw
}
</style>