<template>
  <div class="triangle-template" :style="getStyle()">

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
      style += `border-width:${this.width} ${this.width} 0px ${this.width}`;
      return style;
    },
    getWidth() {
      let style = "";
      style += `border-width:${this.width} ${this.width} 0px ${this.width}`;
      return style;
    }
  }
};
</script>

<style lang="scss">
.triangle-template {
  width: 0;
  height: 0; 
  // border-width: 20px 20px 0px 20px ;
  border-style: solid;
  border-color: red transparent transparent transparent;
  line-height: 99em;
  overflow: hidden;
  cursor: pointer;
  // margin: 30px auto;
}
</style>





 
