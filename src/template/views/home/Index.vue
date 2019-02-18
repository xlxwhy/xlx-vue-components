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
        <shape-triangle direction="right" color="#AAFF00"  />
        <shape-triangle direction="top"  color="red"/>
        <shape-triangle direction="left"/>
        <shape-triangle direction="bottom"/>
        <shape-triangle direction="left-top"/>
        <shape-triangle direction="left-bottom" />
        <shape-triangle direction="right-top"/>
        <shape-triangle direction="right-bottom"/> 
      </div>
    </template-page>
  </div>
</template>
 
 <script>
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
    return {};
  },
  mounted() {},
  components: {
    ShapeSquare,
    ShapeTriangle,
    ColorItem,
    TemplateNavBar,
    TemplateTabbar,
    TemplatePage
  },
  methods: {
    testMemberApi() {
      this.test.api.state = 1;
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



