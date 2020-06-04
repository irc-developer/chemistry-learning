<template src='./Element.html'></template>


<script>
import axios from "axios";
import ELEMENTS_API_URL_ELEMENT_BY_SYMBOL from "../../utils/util.js";

export default {
  name: "ElementComponent",
  props: {},
  components: {},
  data() {
    return {
      elementClass: null,
      symobolId: null
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
    this.symobolId = this.$route.params.id;
    var url = ELEMENTS_API_URL_ELEMENT_BY_SYMBOL & this.symobolId;
  console.log(url);
    console.log(url);
    axios
      .get(url)
      .then(result => {
        var element = result.data;

        var elementObject = new Element(
          element.atomicMass,
          element.atomicNumber,
          element.atomicRadius,
          element.boilingPoint,
          element.bondingType,
          element.cpkHexColor,
          element.density,
          element.electronAffinity,
          element.electronegativity,
          element.electronicConfiguration,
          element.groupBlock,
          element.ionRadius,
          element.ionizationEnergy,
          element.meltingPoint,
          element.name,
          element.oxidationStates,
          element.standardState,
          element.symbol,
          element.vanDelWaalsRadius,
          element.yearDiscovered
        );
        this.elementClass = elementObject;
      })
      .catch(error => {
        alert("Elements API is not working. Error: " & error);
      });
    console.log(this.elementClass);
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

