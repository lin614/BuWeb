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
            <md-list-item class="panel" @click="handleStart(img)" v-for="img in lanImgs" :key="img" v-show="img!=lanImg">
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
    <!-- <div>
       <h1>{{hxs[lanImg]['hx']}}</h1>
    
    </div>
    <div> <hr></div> -->
     <img :src="imgs[lanImg].hx" />
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item"><div :class='{activeHx:hxindex==1}' class="btnHx" @mouseover='hxindex=1' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-qukuailian"></i></div></div>
     <div class="md-layout-item"><div  :class='{activeHx:hxindex==2}' class="btnHx" @mouseover='hxindex=2' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-mianfeiICO" ></i></div></div>
      <div class="md-layout-item"><div  :class='{activeHx:hxindex==3}' class="btnHx" @mouseover='hxindex=3' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-kaifangxing" ></i></div></div>
       <div class="md-layout-item"><div  :class='{activeHx:hxindex==4}' class="btnHx" @mouseover='hxindex=4' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-toumingkexin"></i></div></div>
        <div class="md-layout-item"><div  :class='{activeHx:hxindex==5}' class="btnHx" @mouseover='hxindex=5' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-diyongjin" ></i></div></div>
         <div class="md-layout-item"><div  :class='{activeHx:hxindex==6}' class="btnHx" @mouseover='hxindex=6' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-gaoanquanxing" ></i></div></div>
           <div class="md-layout-item"><div :class='{activeHx:hxindex==7}'  class="btnHx" @mouseover='hxindex=7' @mouseleave='showInfo=false;showInfo=true'><i class="test2 iconfont icon-kuaisuqueren"></i></div></div>
    </div>
     <md-content class="info">
      <transition name="slide-fade">
     <div v-if="showInfo">
        <!-- <img :src="imgs[lanImg].info" class="full"/> -->
        <h1>{{hxs[lanImg]['hx'+hxindex].title}}</h1>
        <hr>
        <p>{{hxs[lanImg]['hx'+hxindex].info}}</p>
     </div>
     </transition>
  </md-content>
  </md-content>
  <md-content id="page4">
     <div> <img :src="imgs[lanImg].foot" class="full"/></div>
  </md-content>
    <md-content id="page5">
    <div class="lx" style="width:100%">
     <!-- 联系方式 -->
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
      imgs: imgs,
      hxindex:1,
      showInfo:true,
      hxs:{
        cn:{
          hx:'核心技术',
          hx1:{title:'区块链技术',info:'区块链技术，简称BT（Blockchain technology），称之为分布式账本技术，是互联网数据库技术，其特点是去中心化、公开透明，让每个人均可参与数据查询。'},
          hx2:{title:'免费ICO',info:'无需缴纳高昂的上币费用，专业团队对接，ico项目免费上线'},
          hx3:{title:'开放性',info:'交易所，各币种以及美元法币自由对接'},
          hx4:{title:'透明可信',info:'基于区块链技术实现全球统一账本，任何人和机构都无法挪用用户资产'},
          hx5:{title:'免/低佣金',info:'前三个月免交易费，还有糖果免费赠送'},
          hx6:{title:'高安全性',info:'专业安全团队，多重签名技术，有高安全性专用钱包免费使用'},
          hx7:{title:'交易快速确认',info:'POS节点机制，交易链上确认最快仅需1秒'}
        },
        en:{
          hx1:{title:'Blockchain Technology',info:'B.T. as called as distributed ledger technology, use the Internet Database Technology, is a digitized, decentralized, public ledger, it allows market participants to keep track of all transactions without central recordkeeping.'},
          hx2:{title:'Free ICO',info:'Listing Free No Charge, professional team support, Free Launching ICO projects.'},
          hx3:{title:'Open',info:'xchanges support for all tokens, USD and other legal currencies. '},
          hx4:{title:'High transparency and credibility',info:'Based on blockchain technology, achieving a global public ledger, completely prevent the misappropriation of funds and assets by anyone or organizations. '},
          hx5:{title:'Low fees / Free',info:'First 3 month no transaction fee, free airdrops'},
          hx6:{title:'Highly secured',info:'Professional Security Team, Multi-Signature Technology, Highly Secured Wallets are Free'},
          hx7:{title:'Fast transaction',info:'adoption of POS, faster confirmed transactions only 1 second'},
        },
         jp:{
          hx1:{title:'ブロックチェーンテクノロジーを駆使します',info:'ブロックチェーンテクノロジー（Blockchain technology）とは、分散型台帳技術、または、分散型ネットワークである。「非中央集権な仕組み」や「取引情報の公開」が特徴。利用者全員がすべてのデータ履歴を確認できます。'},
          hx2:{title:'無料のICO政策',info:'様々な高額手数料は一切なし、プロフェッショナルな運営チームがサポート。'},
          hx3:{title:'豊富な取扱',info:'各種揃えの仮想通貨を取扱、法定通貨との取引も対応。'},
          hx4:{title:'情報公開と信頼性',info:'ブロックチェーンテクノロジーを元に運営。世界中の利用者様は台帳データを共有され、いかなる人や機関でも、利用者様の資産に一切干渉できない。'},
          hx5:{title:'安値、または取引手数料の免除：',info:'取引所の運営初期では、利用者様の取引手数料は一切なし。'},
          hx6:{title:'高い安全性',info:'プロフェッショナルなセキュリティーチームがサポート、マルチ・シグネチャを使用。'},
          hx7:{title:'ハイスピードな取引確認',info:'「PoS」取引検証方式を採用、トレードチェーンでの取引確認は取引後最速１秒からできます。'},
        },
         ko:{
          hx1:{title:'블록체인기술',info:'블록체인기술은 비티(블록체인 테크놀로지) 약칭으로 부릅니다. 공공 거래 장부라고도 부릅니다. 중앙 집중형 서비서를 투명하게 공개하고, 거래 기록을 보관하지 않고 거래에 참여 하는 모든 사용자에게 거래 내역을 보내 주며, 거래 때마다 모든 거래 참여자들이 정보를 공유하고 이를 대조해 데이터 위조나 변조를 할 수 없도록 돼 있다. '},
          hx2:{title:'ICO 무료',info:'비싼 비용을 납부할 필요가 없이 전문 팀을 도킹했다.'},
          hx3:{title:'개장성',info:'저희 거래소가 각종 가상화폐과 법정 화폐를 자유롭게 도킹할 수 있다.'},
          hx4:{title:'투명과 믿음',info:'블록체인 기술을 기반으로 전 세계 통일 계정을 구축하면, 누군가 또 공격할 거점이 없어지니 데이터를 더 안전하게 보관할 수 있다'},
          hx5:{title:'무료/낮은 수술료',info:'저희 거래소가 오픈 전기에 수술료를 무료로 해드립니다.'},
          hx6:{title:'안전성',info:'전문적인 안전 보호 팀하고 다중 서명 장치(Multi-signature)를 통해 복수의 동의가 있어야 거래가 이뤄지도록 하는 등의 조치가 개발합니다.'},
          hx7:{title:'거래 속도를 확인',info:'POS노드 시스템을 이용하고 거래 체인에 확인하는 시간이 1초만 됩니다.'},
        }
      }
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
  width:5vw;
  height:5vw;
   background: url(../imgs/small.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
    align-items: center;
   cursor:pointer;
  border:none;
   
}
/* .btnHx:hover, */
.activeHx{
  transform: scale(1.5);  
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
  font-size:3vw
}
/* .btnHx:hover>i, */
.activeHx>i
{
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
  padding: 3vh 20%;
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
  padding: 7vh 20%;
  /* height: 50vh; */
}
#page3 {
  padding: 3vh 20%;
  background-color: #557cff;
  height: 75vh;
}
.hx{
  display: inline-flex;
  justify-content: flex-end;
  /* align-items: center; */
  padding:5vh 0;
  /* width:5vw; */
  /* height:60%; */
  padding-bottom:10vh;
 
  /* height:4vw; */
}
.hx div{
  display: flex;
  justify-content: flex-end;
}
.hx h1{
  font-size:6vh;
  padding:2vh;
  
}
.hx hr{
  width:4vh;
  height:1vh;
  color:white;
  background-color:white;
  border:none;
  margin:1vh auto;
}
.info{
  padding:5vh;
  display: flex;
  justify-content: center;
    align-items: center;
    color:white;
    text-align:center;
    line-height:2em;
}
.info h1{
  font-size:4vh;
  padding:2vh;
  
}
.info hr{
  width:4vh;
  height:1vh;
  color:white;
  background-color:white;
  border:none;
  margin:1vh auto;
}
.info p{
  font-size:2vh;
  padding:2vh;
}
#page4 {
  padding-top: 3vh;
  height: 40vmin;
  background: url(../imgs/b-bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-content: center;
  padding: 3vh 20%;
  display: flex;
  justify-content: center;
    align-items: center;
}
#page5 {
  padding: 3vh 20%;
  background-color: #333333;
  /* height: 50vh; */
}
.btnLx{
  transition: all 0.3s;  
  width:3em;
  height:3em;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>