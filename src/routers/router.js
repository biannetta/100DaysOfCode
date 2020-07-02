import { Activities } from "../collections/Activities.js";

export const AppRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'filterCollection',
  },
  filterCollection: function (filter) {
    console.log(filter);
    Activities.trigger('filter');
  }
});