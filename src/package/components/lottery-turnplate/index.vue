<template>
  <div class="lottery-turnplate-template" :style="getStyle()">
    <slot />
  </div>
</template>
 

<script>
import Turnplate from "../components/shape/turnplate/turnplate.vue";
import TurnplateItem from "../components/shape/turnplate/turnplate-item.vue";
export default {
  props: {
    width: {
      type: [String, Number],
      default: "400px"
    }
  },
  data() {
    return {
    };
  },

  components: {
    Turnplate,
    TurnplateItem
  },
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
.turnplate-template {
  position: relative;
  margin: 1em auto;
  padding: 0;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
}
</style>



 