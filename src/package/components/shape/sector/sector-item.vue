<template>
  <div class='sector-item-template' :style="itenStyle">
    <div :style="contentStyle">
      <slot />
    </div>
  </div>
</template>
 
 <script>
export default {
  props: {
    distance: {
      type: [String, Number],
      default: "100px"
    },
    color: String,
    colors: {
      type: [Array],
      default: () => {
        return [
          "yellow",
          "cornflowerblue",
          "black",
          "darkcyan",
          "red",
          "blue",
          "green",
          "cadetblue",
          "burlywood",
          "coral"
        ];
      }
    }
  },
  data() {
    return {
      itemIndex: 0,
      itemSize: 1,
      itenStyle: "display:none",
      contentStyle: "display:none"
    };
  },

  components: {},
  mounted() {
    this.itemSize = this.getItemSize();
    this.itemIndex = this.getItemIndex();
    this.itenStyle = this.getItemStyle();
    this.contentStyle = this.getContentStyle();
  },

  methods: {
    getItemIndex() {
      return this.$parent.$children.indexOf(this);
    },
    getItemSize() {
      return this.$parent.$children.length;
    },
    getContentStyle() {
      let width = this.$parent.width.replace("px", "");
      let angle = 360 / this.itemSize;
      let style = "";
      if (this.itemSize == 2) {
        style += `height: ${width / 2}px;`;
        style += `width: ${width}px;`;
      } else if (this.itemSize == 1) {
        style += `height: ${width}px;`;
        style += `width: ${width}px;`;
      } else {
        style += `transform: skewX(${90 - angle}deg) rotate(${90-angle /
          2}deg) translate(-50%,0%) ;`;
        style += `width: ${Math.sin(Math.PI * angle / 2 / 180) * 100}%;`;
        style += `height: ${width/2}px;`;
      }
      return style;
    },
    getItemStyle() {
      let i = this.itemIndex;
      let len = this.itemSize;
      let style = "";
      let ru = 360 / len;
      let r = -i * ru + ru / 2 - 90;
      let s = -(90 - ru);
      let color = this.color ? this.color : this.colors[i % this.colors.length];
      if (len == 2) {
        style += `transform-origin: 50% 100%;`;
        style += `transform: translate(0%, -50%) rotate(${i * 180}deg) ;`;
        style += `background: ${color};`;
      } else if (len == 1) {
        style += `background: ${color};`;
      } else {
        style += `transform: translate(50%, -50%) rotate(${r}deg) skewX(${s}deg);`;
        style += `background: ${color};`;
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
.sector-item-template {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: 0% 100%;
  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform-origin: 0% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>



 