import { dtFormatter } from "../_helpers/_dateFormatter.js";

export const Edit_ActivityItemView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(document.getElementById("activity-item--edit").innerHTML),
  events: {
    'click .button--save': 'saveActivity'
  },
  render: function () {
    let data = this.model || { 
      activity_date: dtFormatter.format(Date.now()),
      activity_type: "",
      activity_quantity: ""
    }

    this.$el.html(this.template(data));
    this.$inputs = document.getElementsByTagName('input');
    return this;
  },
  saveActivity: function () {
    this.model.set({
      'datetime': Date.now(),
      'type': this.$inputs[0].value,
      'quantity': this.$inputs[1].value 
    });
    console.log(this.model);
  },
})