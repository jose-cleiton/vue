/**
 * @typedef {Object} AppData
 * @property {string} name - Nome do usuário
 * @property {number} age - Idade do usuário
 * @property {string} img - URL da imagem do usuário
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
      img: "https://avatars.githubusercontent.com/u/11314585?v=4"
    }
  }
}

Vue.createApp(MyNameApp).mount('#app')
