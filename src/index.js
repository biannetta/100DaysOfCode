import { Activities } from "./collections/Activities.js";
import { ActivityListView } from "./views/index.js";

const appContent = document.getElementById("app-content");
const activityTable = document.getElementById("activities");

// Collections
let activities = new Activities([]);

// Sync with Test Backend
activities.fetch();

// Views
let activitiesList = new ActivityListView({collection: activities});
activityTable.appendChild(activitiesList.render().el);