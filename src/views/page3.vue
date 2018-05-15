<template>
  <md-content id="page3">
    <div class="intro">
      <div>
        <h1>核心优势</h1>
      </div>
      <div><hr></hr>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item"><img src="../imgs/p1.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p2.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p3.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p4.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p5.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p6.png" class="btn" /></div>
      <div class="md-layout-item"><img src="../imgs/p7.png" class="btn" /></div>
    </div>
  </md-content>
</template>

<script>
export default {
  name: 'page3',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
#page3 {
  padding: 3vh 18vw;
  background-color: blueviolet;
  /* height: 50vh; */
}
.intro {
  float: right;
}
.intro h1 {
  color: white;
  margin: 1em 0;
  font-size: 2em;
  line-height: 2em;
}
.intro hr {
  width: 3em;
  margin-bottom: 2em;
  height: 0.5em;
  color: white;
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
.rightTitle {
}
</style>
