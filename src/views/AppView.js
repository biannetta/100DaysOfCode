import { ActivityListView, ActivityItemEditView } from './index.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Init DOM elements
    this.$content = $('.app__content');
    
    // 
    this.listenTo(this.collection, 'filter', () => console.log('test'));
  },
  render: function() {
    // Create new ActivityList
    let activityList = new ActivityListView({ collection: this.collection });
    let activityEditor = new ActivityItemEditView({ collection: this.collection });
    
    this.$content.append(activityList.render().el);
    this.$content.append(activityEditor.render().el);

    return this;
  },
});