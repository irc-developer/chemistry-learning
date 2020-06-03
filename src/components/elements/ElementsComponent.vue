<template src='./Elements.html'></template>


<script>
   const ELEMENTS_API_URL = 'https://neelpatel05.pythonanywhere.com/'
   import ElementComponent from "../element/ElementComponent.vue";
   import Element from "../../models/Element.js";
   import axios from 'axios';
   //import util from '../../utils/util.js';

   export default {
      name: 'ElementsComponent',
      components: {
          ElementComponent
      },
      props: {
                 
      },
      data() {
             return { 
                  elements: []
             }
      },
      methods: {
            
      },
      filters: {
            
      },
      computed: {
            
      },
      created() {
            
      },
      mounted() {
            axios.get(ELEMENTS_API_URL).then(
                (result) => {
                    var listOfElementsFromJSON = result.data;
                    for (var i = 0; i < listOfElementsFromJSON.length; i++) {
                        var element = listOfElementsFromJSON[i];
                        var elementObject = new Element(element.atomicMass, element.atomicNumber, element.atomicRadius, element.boilingPoint, element.bondingType, element.cpkHexColor, element.density, element.electronAffinity, element.electronegativity, element.electronicConfiguration, element.groupBlock, element.ionRadius, element.ionizationEnergy, element.meltingPoint, element.name, element.oxidationStates, element.standardState, element.symbol, element.vanDelWaalsRadius, element.yearDiscovered);
                        this.elements.push(elementObject);
                    }
                }
            )
            
      },
      updated() {
          
      },
      destroyed() {
            
      }
   }
</script>


<style>

</style>