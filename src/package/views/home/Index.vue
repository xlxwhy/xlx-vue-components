<template>
  <div class="home-container">
    <template-page>
      <div class="shape-square-panel">
        <shape-square />
        <shape-square />
        <shape-square />
        <shape-square />
      </div>
      <div class="shape-triangle-panel">
        <shape-triangle direction="right" color="#AAFF00" />
        <shape-triangle direction="top" color="red" />
        <shape-triangle direction="left" />
        <shape-triangle direction="bottom" />
        <shape-triangle direction="left-top" />
        <shape-triangle direction="left-bottom" />
        <shape-triangle direction="right-top" />
        <shape-triangle direction="right-bottom" />
      </div>
      <div class="turnplate-panel">
        <turnplate :class="`${startClass} ${stopClass}`" width="350px">
          <div slot="button">
            <button-gelatine @click.native="start">A</button-gelatine>
          </div>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>10</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>20</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>30</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>40</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>50</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>60</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>70</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
          <turnplate-item>
            <div style="text-align:center">
              <span>为民积分</span><br>
              <span>80</span><br><br><br><br><br><br>
            </div>
          </turnplate-item>
        </turnplate>

        <br><br><br><br>
        <div v-if="point">
          本次抽到+{{this.point}}积分
        </div>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
      </div>
    </template-page>
  </div>
</template>
 
 <script>
import ButtonGelatine from "../../components/button/gelatine/index.vue";
import Turnplate from "../../components/shape/turnplate/turnplate.vue";
import TurnplateItem from "../../components/shape/turnplate/turnplate-item.vue";
import ShapeSquare from "../../components/shape/square/index.vue";
import ShapeTriangle from "../../components/shape/triangle/index.vue";
import HomeBlock from "../../components/home/HomeBlock.vue";
import HomeItem from "../../components/home/HomeItem.vue";
import ColorItem from "../../components/home/ColorItem.vue";
import TemplateNavBar from "../../components/template-nav-bar/Index.vue";
import TemplateTabbar from "../../components/template-tabbar/Index.vue";
import TemplatePage from "../../components/template-page/Index.vue";
import VueProjects from "@/../static/vue-projects.js";
export default {
  data() {
    return {
      index: 1,
      point: 0,
      startClass: "",
      stopClass: "",
      turnplateStyle: ""
    };
  },
  mounted() {},
  components: {
    ShapeSquare,
    ShapeTriangle,
    Turnplate,
    TurnplateItem,
    ButtonGelatine,
    TemplatePage
  },
  methods: {
    start() {
      if (this.startClass.indexOf("start") >= 0) {
        return 1;
      }
      this.point = 0;
      this.stopClass = "";
      this.startClass = "start";
      this.turnplateStyle = "-webkit-transform: rotate(360deg/8);";
      setTimeout(() => {
        this.index = this.getRandomIndex();
        this.stop();
        setTimeout(() => {
          this.point = this.index * 10;
        }, 3000);
      }, 3000);
    },
    stop() {
      this.startClass = "";
      this.stopClass = "stop" + this.index;
    },
    getRandomIndex() {
      return parseInt(Math.random() * 8 + 1);
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

@mixin rotation-stop($index) {
  .stop#{$index} {
    .template__body {
      animation: rotation#{$index} 3s ease-out;
      transform: rotate(($index - 1) * 360deg/8);
    }
  }

  @keyframes rotation#{$index} {
    from {
      -webkit-transform: rotate(($index - 1) * 360deg/8);
    }
    to {
      -webkit-transform: rotate(2520deg+ ($index - 1) * 360deg/8);
    }
  }
}

.home-container {
  .shape-square-panel {
    display: flex;
  }
  .shape-triangle-panel {
    display: flex;
  }

  .turnplate-panel {
    .start {
      .template__body {
        animation: rotationx 2s linear infinite;
      }
    }

    @include rotation-stop(1);
    @include rotation-stop(2);
    @include rotation-stop(3);
    @include rotation-stop(4);
    @include rotation-stop(5);
    @include rotation-stop(6);
    @include rotation-stop(7);
    @include rotation-stop(8);
  }
}

$color-hover: #999;

@keyframes rotationx {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(2520deg);
  }
}
 
</style>



