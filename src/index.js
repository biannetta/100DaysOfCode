import { Activity } from "./models/index.js";
import { Activities } from "./collections/Activities.js";
import { ActivityItemView } from "./views/index.js";
import { testActivities } from "./_helpers/_testData.js";

const activityListing = document.getElementById("activities");

// Step 3: Collections
let activities = new Activities([]);

// Step 1: Backbone Models
testActivities.map((data) => {
  activities.add(new Activity(data));
});

// Step 2: Backbone Views
activities.forEach( activity => {
  let activityView = new ActivityItemView({ model: activity });
  activityListing.appendChild(activityView.render().el);
});
