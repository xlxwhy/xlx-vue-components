<template>
  <div class='turnplate-item-template' :style="itenStyle">
    <div :style="contentStyle">
      <slot />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "turnplate-item",
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
          "#A6C2CE",
          "#9C8F96",
          "#EBC57C",
          "#6B799E",
          "#E1DCD9",
          "#8F8681",
          "#A67F78",
          "#32435F",
          "#BED3D4",
          "#E8CAA4",
          "#A1B872",
          "#E5D67B"
        ];
      }
    }
  },
  data() {
    return { 
      parent:{},
      items: [],
      itemIndex: 0,
      itemSize: 1,
      itenStyle: "display:none",
      contentStyle: "display:none"
    };
  },

  components: {},
  mounted() {
    this.parent = this._findParent("turnplate");
    this.items = this._findChildren("turnplate-item", this.parent);
    this.itemSize = this.getItemSize();
    this.itemIndex = this.getItemIndex();
    this.itenStyle = this.getItemStyle();
    this.contentStyle = this.getContentStyle();
  },

  methods: {
    getItemIndex() {
      return this.items.indexOf(this);
    },
    getItemSize() {
      return this.items.length;
    },
    getContentStyle() {
      let width = this.parent.width.replace("px", "");
      let angle = 360 / this.itemSize;
      let style = "";
      if (this.itemSize == 2) {
        style += `height: ${width / 2}px;`;
        style += `width: ${width}px;`;
      } else if (this.itemSize == 1) {
        style += `height: ${width}px;`;
        style += `width: ${width}px;`;
      } else {
        style += `transform: skewX(${90 - angle}deg) rotate(${90 -
          angle / 2}deg) translate(-50%,0%) ;`;
        style += `width: ${Math.sin(Math.PI * angle / 2 / 180) * 100}%;`;
        style += `height: ${width / 2}px;`;
      }
      return style;
    },
    getItemStyle() {
      let width = this.parent.width.replace("px", "");
      let i = this.itemIndex;
      let len = this.itemSize;
      let style = "";
      let ru = 360 / len;
      let r = -i * ru + ru / 2 - 90;
      let s = -(90 - ru);
      let color = this.color ? this.color : this.colors[i % this.colors.length];
      switch (len) {
        case 1:
          style += `background: ${color};`;
          break;
        case 2:
          style += `transform-origin: 50% 100%;`;
          style += `transform: translate(0%, 0%) rotate(${i * 180}deg) ;`;
          style += `background: ${color};`;
          style += `height: ${width / 2}px;`;
          break;
        default:
          style += `transform: translate(50%, -50%) rotate(${r}deg) skewX(${s}deg);`;
          style += `background: ${color};`;
          break;
      }
      return style;
    }
  }
};
</script>

<style lang="scss">
.turnplate-item-template {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: 0% 100%;
  z-index: 7000;
  color: #666;
  text-shadow: 0 0 1px #666;
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

$color-hover: #99ff00;
.turnplate-item-template:hover {
  z-index: 8000;
  box-shadow: 0px 0px 18px $color-hover;
  outline-width: 1px;
  outline-style: solid;
  outline-color: #99ff00;
  outline-offset: 0px;
  transition: box-shadow 0.5s;
  -webkit-transition: box-shadow 0.5s, outline-color 0.5s;
  > div > div {
    transition: font-size 0.2s, color 0.2s, text-shadow 0.3s;
    font-size: 16px;
    color: green;
    text-shadow: 0 0 3px green;
  }
}

.turnplate-item-template {
  > div > div:hover {
    // animation: content-frame 0.5s 1;
    // font-weight: bold;
    // font-size:16px;
  }
}

@keyframes item-frame {
  from,
  to {
    box-shadow: 0px 0px 8px $color-hover;
  }
  25% {
    box-shadow: 0px 0px 12px $color-hover;
  }
  50% {
    box-shadow: 0px 0px 16px $color-hover;
  }
  75% {
    box-shadow: 0px 0px 17px $color-hover;
  }
  100% {
    box-shadow: 0px 0px 18px $color-hover;
  }
}

@keyframes content-frame {
  from,
  to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>



 