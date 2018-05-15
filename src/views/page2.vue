<template>
  <md-content id="page2">
    <div class="md-layout md-gutter">
      <div class="md-layout-item intro">
        <div>
          <h1>EXCHANGE CHAIN</h1>
        </div>
        <div>
          <h1>是什么</h1>
        </div>
        <div><hr></hr>
        </div>
        <div>
          <section>
            Exchange Chain 是一个基于区块链技术的去中心化交易所，在初期，兼顾交易体验和技术成熟度，exchangechain将交易结果放入链上，建设一个全球一体化，其他交易所和基金可以自由接入的交易中心。交易采取POS节点机制，速度快，交易体验好。技术条件成熟时，将法币和数字货币透明监管，账本升级到链上，在技术上实现任何人和机构都无法挪用客户资金和数字资产，打造一个技术上安全，透明，可靠，可信的数字货币交易所。
          </section>
        </div>
      </div>
      <div class="md-layout-item"><img src="../imgs/pc.png" class="fullImg" /></div>
    </div>
  </md-content>
</template>

<script>
export default {
  name: 'page2',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
#page2 {
  padding: 5vh 18vw;
  /* height: 50vh; */
}
.intro h1 {
  color: blueviolet;
  margin: 1em 0;
  font-size: 3em;
}
.intro hr {
  width: 3em;
  margin-bottom: 2em;
  height: 0.5em;
  color: blueviolet;
  background-color: blueviolet;
  border: none;
}
.intro section {
  padding-right: 3em;
  font-size: 1.3em;
  line-height: 1.4em;
}
.fullImg {
  width: 85%;
  height: 85%;
}
</style>
