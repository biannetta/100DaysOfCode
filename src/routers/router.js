import { Activities } from "../collections/Activities.js";

export const AppRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'filterCollection',
  },
  filterCollection: function (filter) {
    let activities = new Activities();
    activities.trigger('filter');
  }
});