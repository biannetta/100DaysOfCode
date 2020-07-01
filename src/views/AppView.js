import { ActivityListView, ActivityItemEditView } from './index.js';
import { Activities } from '../collections/Activities.js';
import { AppRouter } from '../routers/router.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Create new collection of Activities
    this.activities = new Activities();

    // Instantiate Router
    this.router = new AppRouter({ collection: this.activities });
    Backbone.history.start();

    // Init DOM elements
    this.$content = $('.app__content');
  },
  render: function() {
    // Create new ActivityList
    let activityList = new ActivityListView({ collection: this.activities });
    let activityEditor = new ActivityItemEditView({ collection: this.activities });
    
    this.$content.append(activityList.render().el);
    this.$content.append(activityEditor.render().el);

    return this;
  },
});