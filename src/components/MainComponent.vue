<template>
  <div class="hello">
    <table class="table table-bordered table-hovered table-striped">
      <tbody>
        <ElementsComponent></ElementsComponent>
      </tbody>
    </table>
  </div>
</template>

<script>
import ElementsComponent from "./elements/ElementsComponent.vue";

export default {
  name: "MainComponent",
  props: {
    msg: String
  },
  components: {
    ElementsComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
