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
                  elements: [],
                  
                  elementName: ""
             }
      },
      methods: {
          filterElements: function() {
              console.log(this.elementName)
                var elName = this.elementName;
               
              console.log(this.elements.filter( function (el) {
                  return el.name.includes(elName);
                    })
              );
               
          },
          buttonEvent: function(button) {
              console.log(button);
          }
            
      },
      filters: {
            
      },
      computed: {
            
      },
      created() {
            
      },
      mounted() {
           //Podría usar await para recoger el valor del result pero imagino que usando el then (promesa) funciona igual de bie,
           axios.get(ELEMENTS_API_URL).then(
                (result) => {
                    var listOfElementsFromJSON = result.data;
                    for (var i = 0; i < listOfElementsFromJSON.length; i++) {
                        var element = listOfElementsFromJSON[i];
                        var elementObject = new Element(element.atomicMass, element.atomicNumber, element.atomicRadius, element.boilingPoint, element.bondingType, element.cpkHexColor, element.density, element.electronAffinity, element.electronegativity, element.electronicConfiguration, element.groupBlock, element.ionRadius, element.ionizationEnergy, element.meltingPoint, element.name, element.oxidationStates, element.standardState, element.symbol, element.vanDelWaalsRadius, element.yearDiscovered);
                        this.elements.push(elementObject);
                    }
                }
            ).catch((error) => { alert("Elements API is not working. Error: " & error) })
            
      },
      updated() {
          
      },
      destroyed() {
            
      }
   }
</script>


<style>

</style>