import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const ELEMENTS_API_URL = 'https://neelpatel05.pythonanywhere.com/'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        elements: []
    },
    mutations: {
        transformElementsIntoObjectList(state, elments) {
            var listOfElementsFromJSON = elments.data;
            var elementList = []
            for (var i = 0; i < listOfElementsFromJSON.length; i++) {
                var element = listOfElementsFromJSON[i];
                var elementObject = new Element(element.atomicMass, element.atomicNumber, element.atomicRadius, element.boilingPoint, element.bondingType, element.cpkHexColor, element.density, element.electronAffinity, element.electronegativity, element.electronicConfiguration, element.groupBlock, element.ionRadius, element.ionizationEnergy, element.meltingPoint, element.name, element.oxidationStates, element.standardState, element.symbol, element.vanDelWaalsRadius, element.yearDiscovered);
                this.elementList.push(elementObject);
            }
            state.elements = elementList;
        }
    },
    actions: {
        fetchElements(context) {
            var elementData = null;
            axios.get(ELEMENTS_API_URL).then(
                (result) => {
                    elementData = result.data;
                }
            ).catch((error) => { alert("Elements API is not working. Error: " & error) });
            context.commit(this.transformElementsIntoObjectList, elementData);
        }

    }



})