import { CardComponent } from "../components/Card.js";

const alpha_dayOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const CalendarBannerView = Backbone.View.extend({
  tagName: 'div',
  initialize: function () {
    this.todaysDate = new Date();
  },
  render: function () {
    let todayCard = new CardComponent({
      className: "hdc_card hdc_card--calendar",
      text: this.todaysDate.getDay(),
      subtext: alpha_dayOfWeek[this.todaysDate.getDate()], 
    });

    this.$el.append(todayCard.render().el);
    
    return this;
  }
});