import { ActivityListView, ActivityItemEditView } from './index.js';
import { Activities } from '../collections/Activities.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Create new collection of Activities
    this.activities = new Activities();

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