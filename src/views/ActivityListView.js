import { ActivityItemView } from "./ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  className: 'cardlist',
  template: _.template($("#activity-table").html()),
  events: {
    "keyup .filter": "filterData",
  },
  initialize: function () {
    // Listen for events on Collection
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "request", () => console.log('request'));
    this.listenTo(this.collection, "sync", () => console.log('sync'));
    this.listenTo(this.collection, "filter", this.addItems);
  },
  render: function () {
    this.$el.html(this.template());
    
    // Set jquery reference to table and filter elements
    this.$table = this.$el.find(".table");
    this.$filter = this.$el.find(".filter");

    this.collection.each(this.addItem, this);

    return this;
  },
  addItems: function () {
    this.collection.each(this.addItem, this);
  },
  addItem: function (activity) {
    let activityItem = new ActivityItemView({ 
      model: activity,
      attributes: { "data-type": activity.get('type') }
    });
    this.$table.append(activityItem.render().el);
  },
  filterData: function (event) {
    let filter = this.$filter.val().toLowerCase();

    this.$table.find(".table__row--data").filter( function () {
      // NB: Cannot use the ES6 function here because I require
      //     this to be bound to the function scope of .filter()
      //     and not the entire View object
      let $row = $(this);
      
      // .toggle accepts a true/false value in order to determine 
      //  if the selected item will be hidden
      $row.toggle($row.text().toLowerCase().indexOf(filter) > -1);
    });
  }
});