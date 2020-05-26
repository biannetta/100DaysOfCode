export const ActivityItemView = Backbone.View.extend ({
  tagName: 'div',
  className: 'table__row',
  template: _.template(document.getElementById("activity-item").innerHTML),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});