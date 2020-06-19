import { Activities } from "../collections/Activities.js";
import { ActivityItemView } from "./ActivityItemView.js";
import { Edit_ActivityItemView } from "./Edit_ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  className: 'table', 
  template: _.template($("#activity-table").html()),
  initialize: function () {
    // Create new collection of Activities
    this.collection = new Activities();

    // Get DOM elements
    this.$list = $('.table');

    // Listen for events on Collection
    this.listenTo(this.collection, "change", () => { console.log('collection change trigger')});
    
    // Init collection
    this.loadData();
  },
  events: {
    'click .button--load': 'loadData'
  },
  render: function () {
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