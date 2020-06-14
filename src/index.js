import { Activities } from "./collections/Activities.js";
import { ActivityListView, AppView, Edit_ActivityItemView } from "./views/index.js";

const app = document.getElementById("app");

// Collections
let activities = new Activities();

// Views
let appView = new AppView();
let activitiesList = new ActivityListView({collection: activities});

activities.fetch();
console.log(activities.filterByType('Plank'));

app.appendChild(appView.render().el);

const main = document.getElementsByClassName('main__content')[0];
main.appendChild(activitiesList.render().el);

// Adding New/Editing Activities
const editor = new Edit_ActivityItemView();
main.appendChild(editor.render().el);