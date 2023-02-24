/**
 * @typedef {Object} AppData
 * @property {string} name - Nome do usuário
 * @property {number} age - Idade do usuário

 */

/**
 * @type {import("vue").ComponentOptions}
 */
const MyNameApp = {
  /**
   * @returns {AppData}
   */
  data() {
    return {
      name: "José Cleiton",
      age: 30,
      input_name: "",
      
    }

  },
  methods: {
    submitForm(e) { 
      e.preventDefault()
      this.name = this.input_name
    }
  },

}

Vue.createApp(MyNameApp).mount('#app')
