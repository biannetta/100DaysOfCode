export const AppView = Backbone.View.extend ({
  template: _.template(document.getElementById("app-content").innerHTML),
  events: {
    'click button': 'loadData'
  },
  render: function() {
    this.$el.append(this.template());
    return this;
  },
  loadData: function () {
    console.log('here');
  }
});