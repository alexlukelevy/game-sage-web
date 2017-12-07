import { SearchkitManager } from 'searchkit';

export default new SearchkitManager(
  'http://localhost:9200/games',
  {
    basicAuth: 'elastic:changeme',
  },
);
