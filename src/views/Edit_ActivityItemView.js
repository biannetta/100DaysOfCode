import { dtFormatter } from "../_helpers/_dateFormatter.js";
import { Activity } from "../models/Activity.js";

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
    this.$el.html(this.template({
      formatted_activity_date: dtFormatter.format(this.model.get('datetime')),
      type: this.model.get('type'),
      quantity: this.model.get('quantity'),
      options: ['Planks','Cardio','Situps','Pushups','Planks']
    }));
    this.inputs = document.getElementsByClassName('input_edit');

    return this;
  },
  saveActivity: function () {
    this.model.set({
      'type': this.inputs[0].selectedOptions[0].value,
      'quantity': this.inputs[1].value
    });
    this.model.save();
  }
})