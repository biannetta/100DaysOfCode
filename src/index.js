import { Activity } from "./models/index.js";
import { ActivityItemView } from "./views/index.js";
import { testActivities } from "./_helpers/_testData.js";

const activityListing = document.getElementById("activities");

// Step 1: Backbone Models
const activities = testActivities.reduce((accum, data) => {
  accum.push(new Activity(data));
  return accum;
},[]);

// Step 2: Backbone Views
activities.forEach( activity => {
  activity.fetch();
  let activityView = new ActivityItemView({ model: activity });
  activityListing.appendChild(activityView.render().el);
});
