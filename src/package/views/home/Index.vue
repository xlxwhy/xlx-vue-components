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
      <div class="lottery-panel">
        <lottery @on-start="start" @on-stop="stop">
          <lottery-item> 001 <br><br><br><br><br></lottery-item>
          <lottery-item> 002 <br><br><br><br><br></lottery-item>
          <lottery-item> 003 <br><br><br><br><br></lottery-item>
          <lottery-item> 004 <br><br><br><br><br></lottery-item>
          <lottery-item> 005 <br><br><br><br><br></lottery-item>
          <lottery-item> 006 <br><br><br><br><br></lottery-item>
          <lottery-item> 007 <br><br><br><br><br></lottery-item>
          <lottery-item> 008 <br><br><br><br><br></lottery-item>
        </lottery>
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
import Lottery from "../../components/lottery/lottery.vue";
import LotteryItem from "../../components/lottery/lottery-item.vue";
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
    Lottery,
    LotteryItem,
    ShapeSquare,
    ShapeTriangle,
    Turnplate,
    TurnplateItem,
    ButtonGelatine,
    TemplatePage
  },
  methods: {
    stop(point) {
      this.point = point;
    },
    start() {
      this.point = 0;
    }
  }
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";
 

.home-container {
  .shape-square-panel {
    display: flex;
  }
  .shape-triangle-panel {
    display: flex;
  }
}
</style>



