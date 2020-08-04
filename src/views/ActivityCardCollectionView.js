import { ActivityCardView } from "./ActivityCardView.js";

export const ActivityCardCollectionView = Backbone.View.extend ({
  tagName: 'div',
  className: 'hdc_collection',
  initialize: function () {
    // Listen for events on Collection
    this.listenTo(this.collection, "add", this.addItem);
  },
  render: function () {
    this.$el.html();
    
    this.collection.each(this.addItem, this);

    return this;
  },
  addItems: function () {
    this.collection.each(this.addItem, this);
  },
  addItem: function (activity) {
    let activityCard = new ActivityCardView({ 
      model: activity,
      attributes: { "data-type": activity.get('type') }
    });
    this.$el.append(activityCard.render().el);
  },
});