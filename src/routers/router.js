export const AppRouter = Backbone.Router.extend({
  routes: {
    '*other': 'defaultRoute',
  },
  defaultRoute: function (other) {
    console.log(other);
  }
});