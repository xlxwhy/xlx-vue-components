<template>
  <div class="triangle-template" :style="getStyle()" />
</template>
 

<script>
const COLOR_POS_MAP = {
  left: 1,
  "left-top": 0,
  "left-bottom": 2,
  right: 3,
  "right-top": 0,
  "right-bottom": 2,
  top: 2,
  bottom: 0
};
export default {
  props: {
    color: {
      type: [String, Number],
      default: "green"
    },
    width: {
      type: [String, Number],
      default: "20px"
    },
    direction: {
      type: [String, Number],
      default: "right" //direction:top-bottom-left-right
    },
    compact: {
      type: [Boolean],
      default: true
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
      style += this.getBorderStyle();
      return style;
    },

    getBorderStyle() {
      let style = "";
      style += `border-width:${this.getBorderWidth(
        this.direction,
        this.width
      )};`;
      style += `border-color:${this.getBorderColor(
        this.direction,
        this.color
      )};`;
      return style;
    },
    getBorderColorString(pos, color) {
      const colors = [
        "transparent",
        "transparent",
        "transparent",
        "transparent"
      ];
      colors[pos] = color;
      return colors.join(" ");
    },

    getBorderColor(direction, color) {
      const pos = COLOR_POS_MAP[direction];
      const colors = [
        "transparent",
        "transparent",
        "transparent",
        "transparent"
      ];
      colors[pos] = color;
      return colors.join(" ");
    },
    getBorderWidth(direction, width) {
      let widthValue = parseInt(this.width.replace("px", ""));
      let hypotenuseWidth = widthValue * 1.4142 + "px";
      let offsetWidth = this.compact ? "0px" : widthValue * (2 - 1.4142) + "px";
      let widths = [this.width, this.width, this.width, this.width];

      switch (direction) {
        case "top":
          widths[0] = "0px";
          break;
        case "bottom":
          widths[2] = "0px";
          break;
        case "left":
          widths[3] = "0px";
          break;
        case "left-bottom":
          widths[0] = `${offsetWidth}`;
          widths[1] = `${hypotenuseWidth}`;
          widths[2] = `${hypotenuseWidth}`;
          widths[3] = "0px";
          break;
        case "left-top":
          widths[3] = "0px";
          widths[2] = `${offsetWidth}`;
          widths[1] = `${hypotenuseWidth}`;
          widths[0] = `${hypotenuseWidth}`;
          break;
        case "right":
          widths[1] = "0px";
          break;
        case "right-bottom":
          widths[0] = `${offsetWidth}`;
          widths[1] = "0px";
          widths[2] = `${hypotenuseWidth}`;
          widths[3] = `${hypotenuseWidth}`;
          break;
        case "right-top":
          widths[1] = "0px";
          widths[2] = `${offsetWidth}`;
          widths[3] = `${hypotenuseWidth}`;
          widths[0] = `${hypotenuseWidth}`;
          break;
        default:
          break;
      }
      return widths.join(" ");
    }
  }
};
</script>

<style lang="scss">
.triangle-template {
  width: 0;
  height: 0;
  border-style: solid;
  overflow: hidden;
}
</style>





 
