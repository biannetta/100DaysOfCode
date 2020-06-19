import { ActivityListView } from './ActivityListView.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Init DOM elements
    this.$content = $('.app__content');
  },
  render: function() {
    // Create new ActivityList
    let activityList = new ActivityListView();

    this.$content.html(activityList.render().el);

    return this;
  },
});