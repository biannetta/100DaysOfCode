import { ActivityListView, ActivityItemEditView } from './index.js';
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

    // Create new ActivityList
    let activityList = new ActivityListView({ collection: this.collection });
    let activityEditor = new ActivityItemEditView({ collection: this.collection });

    this.$content.append(activityList.render().el);
    // this.$content.append(activityEditor.render().el);

    return this;
  },
});