
import api from '@/services/api.js';
export default {
  name: 'Footer',
  data() { 
    return { 
      socialLinks: []
    }
  },
  mounted() { 
    api.get('/social-links.json').then(response => { 
      this.socialLinks = response.data;
     
    })
  }
}