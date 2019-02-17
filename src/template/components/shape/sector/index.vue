<template>
  <div class="sector-module">

  </div>
</template>
 

 <script>
 
export default {
  props: {
    
  },
  data() {
    return {};
  },

  components: { 
  },
  mounted() {},
  methods: {
     
  }
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";
.template-nav-bar {
  .van-hairline--bottom::after {
    transform: scale(0);
  }
  .van-nav-bar {
    color: $color-white;
    background-color: $color-primary;
    height: $nav-bar-height;
    .van-icon {
      color: $color-white;
    }
    &__title {
      height: $nav-bar-height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__text {
      color: $color-white;
    }
  }
  background-color: $color-primary;
}
</style>





 
