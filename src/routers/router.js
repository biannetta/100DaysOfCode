import { Activities } from "../collections/Activities.js";

export const AppRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'filterCollection',
  },
  filterCollection: function (filter) {
    let filteredList = Activities.filterByType('Plank');
    Activities.reset(filteredList);
    // Activities.trigger('filter');
  }
});