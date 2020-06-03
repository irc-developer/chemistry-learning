<template src='./Element.html'></template>


<script> 

export default {
  name: "ElementComponent",
  props: {
    oneElement: Object
  },
  components: {},
  data() {
    return {
      elementClass: null
    };
  },
  methods: {
    // methodName(params) { things }
  },
  filters: {
    // filters that use to modify text/html using pipes.
  },
  computed: {
    //these funcitons always are watching and modifying things.
  },
  created() {
    //console.log(adsdasd);
  },
  mounted() {
    this.elementClass = this.oneElement;
  },
  updated() {
    //HOOK when component is updated by something.
  },
  destroyed() {
    //HOOK when component is destroyed.
  }
};
</script>


<style>
</style>

