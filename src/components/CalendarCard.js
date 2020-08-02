const alpha_dayOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const CalendarCardView = Backbone.View.extend({
  tagName: 'div',
  className: "hdc_calendar",
  template: _.template($("#hdc_calendar").html()),
  initialize: function () {
    let date = new Date();

    this.dayOfTheWeek = date.getDay();
    this.dayOfTheMonth = date.getDate();
  },
  render: function () {
    this.$el.html(this.template({
      day: this.dayOfTheMonth,
      dayOfWeek: alpha_dayOfWeek[this.dayOfTheWeek],
    }));
    return this;
  }
});