import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/lib/locale/fr';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: { primary: '#ef6c00' },
      light: { primary: '#ef6c00' },
    },
  },
  lang: {
    locales: { fr },
    current: 'fr',
  },
});
