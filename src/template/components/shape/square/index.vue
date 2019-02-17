<template>
  <div class="square-template" :style="getStyle()">

  </div>
</template>
 

 <script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "20px"
    }
  },
  data() {
    return {};
  },

  components: {},
  mounted() {},
  methods: {
    getStyle() {
      let style = "";
      style += `border-width:${this.width}`;
      return style;
    }
  }
};
</script>

<style lang="scss">
.square-template {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: red blue green yellow;
  overflow: hidden;
  // line-height: 99em;
  // cursor: pointer;
  // margin: 30px auto;
  margin: 0px 0px;
  display: inline-block;
}
</style>





 
