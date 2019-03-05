<template>
  <div class="button-gelatine-template" >
    <a class="btn">
      <slot />
    </a>
  </div>
</template>
 

 <script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "40px"
    },
    height: {
      type: [String, Number],
      default: "40px"
    }
  },
  data() {
    return {};
  },
 
  methods: {
 
  }
};
</script>

<style lang="scss">
.button-gelatine-template {
 
}

// DCC1B0 869DAB 847072 3D313F
$color-bg: #DCC1B0 !default;
$color-btn: #847072 !default;
$color-btn-secondary: #847072;
$color-btn-active: #3D313F !default;
$color-btn-active-border: #847072 !default;

/**
 * $Mixin 
 **/
@mixin fontsize($size: 24, $base: 16) {
  font-size: $size + px;
  font-size: ($size / $base) * 1rem;
} /* http://www.sitepoint.com/sass-mixins-kickstart-project/ */

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
  background-clip: padding-box; //stops bg color from leaking outside the border:
}

@mixin box-shadow($shadows...) {
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

@mixin transition-timing-function($timing) {
  -webkit-transition-timing-function: $timing;
  -moz-transition-timing-function: $timing;
  -o-transition-timing-function: $timing;
  transition-timing-function: $timing;
}

@mixin animation($animation) {
  -webkit-animation: $animation;
  -moz-animation: $animation;
  -o-animation: $animation;
  animation: $animation;
}

@mixin transition-duration($duration) {
  -webkit-transition-duration: $duration;
  -moz-transition-duration: $duration;
  -o-transition-duration: $duration;
  transition-duration: $duration;
}

/**
 * $Base 
 **/
body {
  margine: 0 auto;
  padding-top: 60px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  @include fontsize(22);
  font-weight: 500;
  color: #333;
  background-color: $color-bg;
}
h1 {
  @include fontsize(38);
  font-style: italic;
  text-shadow: 1px 1px 0 #f2f2f2, 2px 2px 0 #f2f2f2;
}

/**
 * $Bottom 
 **/
a.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 ;
  padding: 15px 15px  ;
  @include fontsize(26);
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: $color-btn;
  width: 40px;
  height: 40px;
  @include border-radius(50%);
  // @include box-shadow(0 0 0 -2px $color-bg, 0 0 0 -1px $color-btn);
  @include box-shadow(0 0 0  2px $color-bg, 0 0 0 4px darken($color-bg, 5%) );
  border: none;
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;


  &:hover,
  &:focus {
    @include box-shadow(0 0 0 2px $color-bg, 0 0 0 4px darken($color-btn-active-border, 5%));
    @include transition-timing-function(cubic-bezier(0.6, 4, 0.3, 0.8));
    @include animation(gelatine 0.5s 1);
  }
}

a.btn-secondary {
  background: $color-btn-secondary;
  @include box-shadow(0 0 0 -2px $color-bg, 0 0 0 -1px $color-btn-secondary);
  &:hover {
    @include box-shadow(
      0 0 0 2px $color-bg,
      0 0 0 4px darken($color-btn-secondary, 5%)
    );
  }
}

a.btn:active,
a.btn-secondary:active {
  background: $color-btn-active;
  @include transition-duration(0);
  @include box-shadow(
    0 0 0 2px $color-bg,
    0 0 0 4px darken($color-btn-active, 5%)
  );
  @include animation(gelatine 0.5s 1);
}

/**
 * $keyframes \ gelatine 
 **/
@keyframes gelatine {
  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
}

@-webkit-keyframes gelatine {
  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
  from,
  to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }
  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }
  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
}
</style>



 