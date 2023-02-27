
import api from '@/services/api.js';
export default {
  name: 'Footer',
  mounted() { 
    api.get('/social-links.json').then(response => { 
      this.socialLinks = response.data;
      console.log(this.socialLinks);
    })
  }
}