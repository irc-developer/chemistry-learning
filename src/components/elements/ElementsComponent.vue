<template src='./Elements.html'></template>


<script>
   const ELEMENTS_API_URL = 'https://neelpatel05.pythonanywhere.com/'
   import ElementComponent from "../element/ElementComponent.vue";
   import axios from 'axios';

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
                    console.log(result);    
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