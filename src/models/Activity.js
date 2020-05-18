export var Activity = Backbone.Model.extend({
  defaults: {
    type: '',
    quantity: 0,
    datetime: Date.now(),
  }
});