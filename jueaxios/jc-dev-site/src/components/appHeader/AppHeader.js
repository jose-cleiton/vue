import AppHeader from "./AppHeader.vue"

export default {
  name: 'AppHeader',
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    openMenu: function() {
      this.menuActive = true;
    },
    closeMenu: function() {
      this.menuActive = false;
    }
   
  },
  components: {
    AppHeader
  }
}