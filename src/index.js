import { Activities } from "./collections/Activities.js";
import { Activity } from "./models/Activity.js";
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

// Adding New/Editing Activities
const editor = new Edit_ActivityItemView({model: new Activity()});
app.appendChild(editor.render().el);