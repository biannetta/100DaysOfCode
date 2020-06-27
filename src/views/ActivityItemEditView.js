export const ActivityItemEditView = Backbone.View.extend({
  tagName: 'div',
  className: 'app__panel',
  template: _.template($("#activity-data-entry").html()),
  events: {
    'click .button--save': 'saveActivity',
    'change input.input_edit': 'onInputChange',
  },
  render: function () {
    this.$el.html(this.template({
      type: '',
      quantity: 0,
      options: ['Planks','Cardio','Situps','Pushups','Planks']
    }));
    this.inputs = document.getElementsByClassName('input_edit');

    return this;
  },
  saveActivity: function () {
    // collection.create will create a new model in the collection
    // and will trigger the following events on the collection:
    // add -> request (sending the model to the server) -> sync (fetch new collection)
    this.collection.create({
      'type': this.inputs[0].selectedOptions[0].value,
      'quantity': this.inputs[1].value
    });
  }
})