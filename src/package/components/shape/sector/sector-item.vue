<template>
  <li class='sector-item-template'></li>
</template>
 

 <script>
export default {
  props: {},
  data() {
    return {
      index: 0
    };
  },

  components: {},

  mounted() {},
  created() {
    if (this.$parent && this.$parent.onCreatedItem) {
      this.$parent.onCreatedItem(this);
      this.index = this.$parent.items.length - 1;
      console.log(this.$parent.$children);
      
    }
  },
  destroyed() {
    if (this.$parent && this.$parent.onDestroyedItem) {
      this.$parent.onDestroyedItem(this); 
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.sector-item-template {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
  transform: rotate(30deg) skewY(-30deg);
  background: black;
}
</style>



 