<template src='./Element.html'></template>


<script>
import Element from "../../models/Element.js";

export default {
  name: "ElementComponent",
  props: {
    //TODO: it will need a element object from a list
  },
  components: {},
  data() {
    return {
      elementClass: new Element(
        "1.00794(4)",
        1,
        37,
        20,
        "diatomic",
        "FFFFFF",
        8.99e-5,
        -73,
        2.2,
        "1s1",
        "nonmetal",
        "",
        1312,
        14,
        "Hydrogen",
        "-1, 1",
        "gas",
        "H",
        120,
        1766
      )
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
    /*
    "atomicMass": "1.00794(4)",
        "atomicNumber": 1,
        "atomicRadius": 37,
        "boilingPoint": 20,
        "bondingType": "diatomic",
        "cpkHexColor": "FFFFFF",
        "density": 8.99e-05,
        "electronAffinity": -73,
        "electronegativity": 2.2,
        "electronicConfiguration": "1s1",
        "groupBlock": "nonmetal",
        "ionRadius": "",
        "ionizationEnergy": 1312,
        "meltingPoint": 14,
        "name": "Hydrogen",
        "oxidationStates": "-1, 1",
        "standardState": "gas",
        "symbol": "H",
        "vanDelWaalsRadius": 120,
        "yearDiscovered": 1766
    */
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

