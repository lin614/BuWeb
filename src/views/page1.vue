<template>
    <md-content class="page1">
        <div class="md-layout md-gutter page1-1">
            <div class="md-layout-item md-size-30"> <img src="../imgs/logo.png" /></div>
            <div class="md-layout-item"></div>
            <div class="md-layout-item md-size-10">
                <md-menu md-size="small" md-align-trigger>
                    <md-button md-menu-trigger>
                        <img :src="lanImg" />
                    </md-button>

                    <md-menu-content>
                        <md-list-item class="md-primary" @click="handleStart(img)" v-for="img in lanImgs" :key="img">
                            <img :src="img" />
                        </md-list-item>
                    </md-menu-content>
                </md-menu>
            </div>
        </div>
        <div class="notice">
            <div><img src="../imgs/exchangechain.png" /></div>
            <div><img src="../imgs/wz.png" style="width:100%" /></div>
            <div><img src="../imgs/100.png" style="width:60%" /></div>
            <div>
                <p>联系方式:exchain@exchangechain.com</p>
            </div>
        </div>
    </md-content>
</template>

<script>
import cn from '../imgs/l-cn.png'
import en from '../imgs/l-en.png'
import jp from '../imgs/l-jp.png'
import ko from '../imgs/l-ko.png'
export default {
  name: 'page1',
  data() {
    return {
      lanImg: cn,
      lanImgs: [en, cn, jp, ko]
    }
  },
  methods: {
    handleStart(img) {
      console.log(img)
    }
  }
}
</script>

<style>
.page1 {
  /* height: 75vmin; */
  padding-top: 3vh;
  max-height: 70vmin;
  background: url(../imgs/w-top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-content: center;
  padding: 3vh 15vw;
}
/* .page1-1 {
  padding: 20px auto;
} */
.md-list {
  padding: 0;
  background-color: darkslateblue;
}
.notice {
  padding: 5% 15%;
}
.notice > div {
  padding-bottom: 5vh;
}
.notice > div:nth-child(3) {
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
</style>
