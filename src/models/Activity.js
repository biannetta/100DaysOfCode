const activityTypes = {
  SITUPS: "Situps",
  PUSHUPS: "Pushups",
  SQUATS: "Squats",
  PLANKS: "Planks"
}

export var Activity = Backbone.Model.extend({
  defaults: {
    type: '',
    quantity: 0,
    datetime: Date.now(),
  },
  validate: function (attrs) {
    console.log(attrs);
  }
});