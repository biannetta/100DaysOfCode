import { Activity } from "../models/Activity.js";
import { dtFormatter } from "../_helpers/_dateFormatter.js";

export const Edit_ActivityItemView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(document.getElementById("activity-item--edit").innerHTML),
  events: {
    'click .button--save': 'saveActivity',
    'change input.input_edit': 'onInputChange',
  },
  preinitialize: function () {
    this.model = new Activity();
  },
  render: function () {
    let data = this.model || { 
      formatted_activity_date: dtFormatter.format(Date.now()),
      activity_type: "",
      activity_quantity: ""
    }

    this.$el.html(this.template(data));
    this.inputs = document.getElementsByTagName('input');

    return this;
  },
  saveActivity: function () {
    this.model.set({
      'type': this.inputs[0].value,
      'quantity': this.inputs[1].value
    });    
    console.log(this.model);
  },
  onInputChange: function (e) {
    console.log(e);
    console.log([this.inputs, this.model]);
  }
})