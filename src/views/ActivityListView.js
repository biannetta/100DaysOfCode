import { ActivityItemView } from "./ActivityItemView.js";
import { Edit_ActivityItemView } from "./Edit_ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  className: 'table',
  template: _.template(document.getElementById("activity-table").innerHTML),
  initialize() {
    this.listenTo(this.collection, "change", this.render);
  },
  events: {
    'click .button--load': 'loadData'
  },
  render: function () {
    this.$el.empty();
    this.$el.append(this.template());
    
    let editActivityView = new Edit_ActivityItemView();
    this.$el.find('#data-entry').html(editActivityView.render().el);

    this.collection.forEach( activity => {
      let activityView = new ActivityItemView({ model: activity });
      this.el.appendChild(activityView.render().el);
    });
    
    return this;
  },
  loadData: function () {
    // Sync with Test Backend
    // ======================
    // makes a sync call on the collections model
    // which has a sync property to override the default
    // call to Backbone.sync
    this.collection.fetch();
  }
});