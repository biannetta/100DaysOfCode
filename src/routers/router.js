import { Activities } from "../collections/Activities.js";

export const AppRouter = Backbone.Router.extend({
  routes: {
    '*filter': 'filterCollection',
  },
  filterCollection: function (filter) {
    
    let activities = new Activities();
    activities.fetch();
    let filteredActivities = activities.filterByType(filter);

    console.log(filteredActivities);
  }
});