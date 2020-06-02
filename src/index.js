import { Activities } from "./collections/Activities.js";
import { ActivityListView } from "./views/index.js";
import { AppView } from "./views/index.js";

const app = document.getElementById("app");

// Collections
let activities = new Activities();

// Views
let appView = new AppView();
let activitiesList = new ActivityListView({collection: activities});

app.appendChild(appView.render().el);

const dataTable = document.getElementsByClassName('main__content')[0];
dataTable.appendChild(activitiesList.render().el);

// Sync with Test Backend
// ======================
// makes a sync call on the collections model
// which has a sync property to override the default
// call to Backbone.sync
const btnFetchData = document.getElementById("activities-fetch");

btnFetchData.onclick = () => {
  activities.fetch({
    success: function (collection, resp, options) {
      console.log(resp);
    }
  });
};