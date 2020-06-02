export const AppView = Backbone.View.extend ({
  template: _.template(document.getElementById("app-content").innerHTML),
  render: function() {
    this.$el.append(this.template());
    return this;
  },
});