
/**
 * find parent component by name
 */

export default {
  data() {
    return {

    };
  },

  methods: {
    _findParent(name) {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          break;
        }
        parent = parent.$parent;
      }
      return parent;
    },
    _findChildren(name, component) {
      let parent = component ? component : this;
      let children = parent.$children;
      if (!children || children.length == 0) {
        return []
      }
      let result = [];
      children.forEach(e => {
        if (e.$options.name === name) {
          result.push(e)
        } else {
          let subChildren = this._findChildren(name, e)
          result = result.concat(subChildren)
        }
      });
      return result;
    }
  }
};


