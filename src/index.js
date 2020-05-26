import { Activity } from "./models/index.js";
import { Activities } from "./collections/Activities.js";
import { ActivityListView } from "./views/index.js";
import { testActivities } from "./_helpers/_testData.js";

const appContent = document.getElementById("app-content");
const activityTable = document.getElementById("activities");

// Step 3: Collections
let activities = new Activities([]);

// Step 1: Backbone Models
testActivities.map((data) => {
  activities.add(new Activity(data));
});

// Step 2: Backbone Views
let activitiesList = new ActivityListView({collection: activities});
activityTable.appendChild(activitiesList.render().el);