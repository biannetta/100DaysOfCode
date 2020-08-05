import { ActivityCardCollectionView } from './ActivityCardCollectionView.js';
import { CalendarBannerView } from './CalendarBannerView.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Init DOM elements
    this.$header = $('.header');
    this.$content = $('.content');
    this.$footer = $('.footer');
   },
  render: function() {
    // Creat Calendar Card
    let calendarSelector = new CalendarBannerView();
    this.$header.append(calendarSelector.render().el);

    // Create new ActivityCardCollection
    let activityCollection = new ActivityCardCollectionView({ collection: this.collection });
    this.$content.append(activityCollection.render().el);

    return this;
  },
});