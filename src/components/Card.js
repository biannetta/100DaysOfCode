export const CardView = Backbone.View.extend({
  tagName: 'div',
  className: "hdc_card",
  template: _.template($("#hdc_card").html()),
  initialize: function (options) {
    // init passed in values for card display
    let {text, subtext} = options;
    this.text = text;
    this.subtext = subtext;
  },
  render: function () {
    this.$el.html(this.template({
      text: this.text,
      subtext: this.subtext,
    }));
    return this;
  }
});