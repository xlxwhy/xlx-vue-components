<template>
  <div class="sector-template" :style="getStyle()">
    <slot />
  </div>
</template>
 

 <script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "400px"
    }
  },
  data() {
    return {
      children: []
    };
  },

  components: {},
  mounted() {},
  methods: {
    getStyle() {
      let style = "";
      style += `width:${this.width};`;
      style += `height:${this.width};`;
      return style;
    }
  }
};
</script>

<style lang="scss">
.sector-template {
  position: relative;
  margin: 1em auto;
  padding: 0; 
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
}
</style>



 