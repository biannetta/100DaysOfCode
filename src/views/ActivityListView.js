import { ActivityItemView } from "./ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  className: 'app__panel',
  template: _.template($("#activity-table").html()),
  initialize: function () {
    // Listen for events on Collection
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "request", () => console.log('request'));
    this.listenTo(this.collection, "sync", () => console.log('sync'));
    this.listenTo(this.collection, "filter", this.addItems);
  },
  render: function () {
    this.$el.append(this.template());
    
    this.$table = this.$el.find(".table");

    this.collection.each(this.addItem, this);

    return this;
  },
  addItems: function () {
    this.$table.empty();
    this.collection.each(this.addItem, this);
  },
  addItem: function (activity) {
    let activityView = new ActivityItemView({ model: activity });
    this.$table.append(activityView.render().el);
  },
  filterData: function () {
    console.log('filter the collection view');
  }
});