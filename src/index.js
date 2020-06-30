import { AppRouter } from "./routers/router.js";
import { AppView } from "./views/index.js";

// Instantiate Router
new AppRouter();
Backbone.history.start();

// Instantiate App Views
let appView = new AppView({ el: '#app'});
appView.render();