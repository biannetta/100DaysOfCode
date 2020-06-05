import { Activities } from "./collections/Activities.js";
import { ActivityListView, AppView, Edit_ActivityItemView } from "./views/index.js";

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
  activities.fetch();
};

// Adding New/Editing Activities
const editor = new Edit_ActivityItemView();
app.appendChild(editor.render().el);