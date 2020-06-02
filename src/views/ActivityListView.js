import { ActivityItemView } from "./ActivityItemView.js";

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  template: _.template(document.getElementById("activity-table").innerHTML),
  initialize() {
    this.listenTo(this.collection, "change", this.render);
  },
  render: function () {
    this.$el.empty();
    this.$el.append(this.template());
    
    this.collection.forEach( activity => {
      let activityView = new ActivityItemView({ model: activity });
      this.el.appendChild(activityView.render().el);
    });
    
    return this;
  }
});