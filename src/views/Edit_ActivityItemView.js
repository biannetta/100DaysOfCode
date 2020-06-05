import { dtFormatter } from "../_helpers/_dateFormatter.js";

export const Edit_ActivityItemView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(document.getElementById("activity-item--edit").innerHTML),
  render: function () {
    let data = this.model || { 
      activity_date: dtFormatter.format(Date.now()),
      activity_type: "",
      activity_quantity: ""
    }

    this.$el.html(this.template(data));
    return this;
  }
})