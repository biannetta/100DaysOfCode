import { dtFormatter } from "../_helpers/_dateFormatter.js";

export const ActivityItemView = Backbone.View.extend ({
  tagName: 'div',
  className: 'table__row',
  template: _.template($("#activity-item--display").html()),
  render: function () {
    const { datetime, type, quantity } = this.model.attributes;
    this.$el.html(this.template({
      formatted_activity_date: dtFormatter.format(datetime), 
      activity_type: type, 
      activity_quantity: quantity
    }));
    return this;
  }
});