const activityTypes = {
  SITUPS: "Situps",
  PUSHUPS: "Pushups",
  SQUATS: "Squats",
  PLANKS: "Planks"
}

export const Activity = Backbone.Model.extend({
  defaults: {
    type: '',
    quantity: 0,
    datetime: Date.now(),
  },
  parse: (resp, opt) => {
    console.log([resp, opt]);
  },
  urlRoot: '/activities',
  validate: function (attrs) {
    console.log(attrs);
  }
});