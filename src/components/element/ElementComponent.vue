<template src="./Element.html"></template>


<script>
import axios from "axios";
import Element from "../../Models/Element.js";
import ELEMENTS_API_URL_ELEMENT_BY_SYMBOL from "../../utils/util.js";

export default {
  name: "ElementComponent",
  data() {
    return {
      elementClass: null,
      symbolId: null
    };
  },
  mounted() {
    this.symbolId = this.$route.params.symbol;
    const url = `${ELEMENTS_API_URL_ELEMENT_BY_SYMBOL}${encodeURIComponent(this.symbolId)}`;
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
        alert(`Elements API is not working. Error: ${error}`);
      });
    console.log(this.elementClass);
  },
};
</script>


<style>
</style>

