import Engineer from './components/PageSectionEngineer.vue';
import Artist from './components/PageSectionArtist.vue';

export const routes = [
  { path: '/',
    component: Engineer
  },
  { path: '/artist',
    component: Artist
  }
];
