<template>
  <div class="lottery-item">
    <turnplate-item>
      <div class="lottery-item__body">
        <div>
          <div v-if="name">{{name}}</div>
          <div v-if="title">{{title}}</div>
          <div v-if="label">{{label}}</div>
          <div v-if="value">{{value}}</div>
          <slot />
        </div>
      </div>
    </turnplate-item>
  </div>
</template>
 
<script>
import TurnplateItem from "../../components/shape/turnplate/turnplate-item.vue";
export default {
  name: "lottery-item",
  props: {
    name: [String, Number],
    title: [String, Number],
    label: [String, Number],
    value: [String, Number]
  },
  data() {
    return {};
  },
  mounted() {},
  components: {
    TurnplateItem
  },
  methods: {}
};
</script>

<style lang="scss">
.lottery-item {
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>



