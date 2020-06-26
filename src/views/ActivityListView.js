import { ActivityItemView } from "./ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  template: _.template($("#activity-table").html()),
  initialize: function () {
    // Listen for events on Collection
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "request", () => console.log('request'));
    this.listenTo(this.collection, "sync", () => console.log('sync'));
    
    // Init collection
    this.loadData();
  },
  render: function () {
    this.$el.append(this.template());
    
    this.collection.each(this.addItem, this);

    return this;
  },
  addItem: function (activity) {
    let activityView = new ActivityItemView({ model: activity });
    this.$el.append(activityView.render().el);
  },
  loadData: function () {
    // Sync with Test Backend
    // ======================
    // makes a sync call on the collections model
    // which has a sync property to override the default
    // call to Backbone.sync
    //
    // NB: 'reset' fires only once entire collection loaded
    this.collection.fetch({reset: true});
  }
});