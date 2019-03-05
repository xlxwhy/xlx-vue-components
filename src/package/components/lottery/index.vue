<template>
  <div class="turnplate-template">
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
  </div>
</template>
 
 <script>
import Turnplate from "../../components/shape/turnplate/turnplate.vue";
import TurnplateItem from "../../components/shape/turnplate/turnplate-item.vue";
import ButtonGelatine from "../../components/button/gelatine/index.vue";
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
    Turnplate,
    TurnplateItem,
    ButtonGelatine
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

  .turnplate-template {
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



