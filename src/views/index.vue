<template>
    <div class="page-container">
        <page1></page1>
        <page2></page2>
        <md-content class="page2">Primary</md-content>
        <md-content class="page3">Primary</md-content>
        <md-content class="page4">Primary</md-content>
        <md-content class="page5">Primary</md-content>
    </div>
</template>
<style>
.page-container > div {
  /* width: 100%; */
  /* display: inline-flex;
  justify-content: center;
  align-items: center; */
  /* margin: auto;
  padding: 3vh 15vw; */
}


</style>
<script>
import page1 from './page1'
import page2 from './page2'
export default {
  data() {
    return {}
  },
  components: { page1, page2 },
  methods: {}
}
</script>