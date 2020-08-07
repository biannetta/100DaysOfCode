import { CardComponent } from "../components/Card.js";

const alpha_dayOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const CalendarBannerView = Backbone.View.extend({
  tagName: 'div',
  className: 'hdc_collection',
  initialize: function () {
    this.todaysDate = new Date();
  },
  render: function () {
    for (var i of [-1, 0, 1]) {
      // TODO: Refactor CSS of this, not sure i like nested ternary operators
      let dateCard = new CardComponent({
        className: "hdc_card hdc_card--calendar" + (i < 0 ? ' scaled scaled--left': i > 0 ? ' scaled scaled--right': ' overlay'),
        text: this.todaysDate.getDate() + i,
        subtext: alpha_dayOfWeek[this.todaysDate.getDay() + i], 
      });
      this.$el.append(dateCard.render().el);
    }

    return this;
  }
});