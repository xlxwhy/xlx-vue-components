<template>
  <div class="triangle-template" :style="getStyle()">

  </div>
</template>
 

<script>
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
    }
  },
  data() {
    return {};
  },

  components: {},
  mounted() {},
  methods: {
    getStyle() {
      let border = this.getBorderStyle();
      let style = "";
      style += `border-width:${border.borderWidth};`;
      style += `border-color:${border.borderColor};`;
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
      let borderColor = "";
      switch (direction) {
        case "top":
          borderColor = this.getBorderColorString(2, color);
          break;
        case "bottom":
          borderColor = this.getBorderColorString(0, color);
          break;
        case "left":
          borderColor = this.getBorderColorString(1, color);
          break;
        case "left-bottom":
          borderColor = this.getBorderColorString(2, color);
          break;
        case "left-top":
          borderColor = this.getBorderColorString(0, color);
          break;
        case "right":
          borderColor = this.getBorderColorString(3, color);
          break;
        case "right-bottom":
          borderColor = this.getBorderColorString(2, color);
          break;
        case "right-top":
          borderColor = this.getBorderColorString(0, color);
          break;
        default:
          break;
      }
      return borderColor;
    },
    getBorderWidth(direction, width) {
      let widthValue = parseInt(this.width.replace("px", ""));
      let hypotenuseWidth = widthValue * 1.4142 + "px";
      let offsetWidth = widthValue * (2 - 1.4142) + "px";
      let widths = [this.width, this.width, this.width, this.width]; 
      console.log(widthValue, hypotenuseWidth, offsetWidth, widths);

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
    },

    getBorderStyle() {
      let style = {};
      style.borderColor = this.getBorderColor(this.direction, this.color);
      style.borderWidth = this.getBorderWidth(this.direction, this.width);
      return style;
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





 
