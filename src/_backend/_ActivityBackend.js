import { testActivities } from "../_helpers/_testData.js";
import { Activity } from "../models/index.js";

export const ActivityBackend = function (method, model, options) {
  if (method == "read") {
    testActivities.map((data) => {
      model.add(new Activity(data));
    });
  }
}