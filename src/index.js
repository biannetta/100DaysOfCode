import { AppRouter } from "./routers/router.js";
import { AppView } from "./views/index.js";
import { Activities } from "./collections/Activities.js";

// Create new collection of Activities
let activities = new Activities();

// Instantiate Router
new AppRouter();
Backbone.history.start();

// Instantiate App Views
let appView = new AppView({ 
  el: '#app',
  collection: activities
});
appView.render();