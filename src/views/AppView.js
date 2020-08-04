import { ActivityCardCollectionView } from './ActivityCardCollectionView.js';
import { CalendarCardView } from '../components/CalendarCard.js';

export const AppView = Backbone.View.extend ({
  initialize: function () {
    // Init DOM elements
    this.$header = $('.header');
    this.$content = $('.content');
    this.$footer = $('.footer');
   },
  render: function() {
    // Creat Calendar Card
    let calendarCard = new CalendarCardView();

    this.$header.append(calendarCard.render().el);

    // Create new ActivityCardCollection
    let activityCollection = new ActivityCardCollectionView({ collection: this.collection });

    this.$content.append(activityCollection.render().el);

    return this;
  },
});