<template>
  <div class="sector-template">

    <ul class='pie'>
      <li class='slice-one slice'> </li>
      <li class='slice-two slice'> </li>
      <li class='slice-three slice'> </li>
      <li class='slice-four slice'> </li>
      <li class='slice-five slice'> </li>
      <li class='slice-six slice'> </li>
    </ul>
  </div>
</template>
 

 <script>
export default {
  props: {},
  data() {
    return {};
  },

  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.pie {
  position: relative;
  margin: 1em auto;
  padding: 0;
  width: 32em;
  height: 32em;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
}
.slice {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0% 100%;
}
.slice-one {
  transform: rotate(30deg) skewY(-30deg);
  background: black;
}
.slice-two {
  transform: rotate(-30deg) skewY(-30deg);
  background: yellow;
}
.slice-three {
  transform: rotate(-90deg) skewY(-30deg);
  background: black;
}
.slice-four {
  transform: rotate(-150deg) skewY(-30deg);
  background: yellow;
}
.slice-five {
  transform: rotate(-210deg) skewY(-30deg);
  background: black;
}
.slice-six {
  // transform: rotate(-270deg) skewY(-30deg);
  // background: yellow;
  transform: rotate(90deg) skewY(-30deg);
  background: yellow;
}
</style>



 