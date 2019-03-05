<template>
  <div class="lottery-template">
    <turnplate :class="`${startClass} ${stopClass}`" width="350px">
      <div slot="button">
        <button-gelatine @click.native="start">A</button-gelatine>
      </div>
      <slot />
    </turnplate>
  </div>
</template>
 
 <script>
import Turnplate from "../../components/shape/turnplate/turnplate.vue";
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
@mixin rotation-stop($index, $n) {
  .stop#{$index} {
    .template__body {
      animation: rotation-#{$index} 3s ease-out;
      transform: rotate(($index - 1) * 360deg / $n);
    }
  }
  @keyframes rotation-#{$index} {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(2520deg+ ($index - 1) * 360deg / $n);
    }
  }
}

@keyframes rotationx {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(2520deg);
  }
}

.lottery-template {
  .start {
    .template__body {
      animation: rotationx 2s linear infinite;
    }
  }

  @include rotation-stop(1, 8);
  @include rotation-stop(2, 8);
  @include rotation-stop(3, 8);
  @include rotation-stop(4, 8);
  @include rotation-stop(5, 8);
  @include rotation-stop(6, 8);
  @include rotation-stop(7, 8);
  @include rotation-stop(8, 8);
}
</style>



