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
    this.$el.html(this.template(this.model.toJSON()));
    this.inputs = document.getElementsByTagName('input');

    return this;
  },
  saveActivity: function () {
    this.model.set({
      'type': this.inputs[0].value,
      'quantity': this.inputs[1].value
    });
    this.model.save();
  },
  onInputChange: function (e) {
    console.log(e);
  }
})