import { testActivities } from "../_helpers/_testData.js";

/**
 * Faux Backend function to handle test data
 * @param {String} method 
 * @param {Backbone.Model | Backbone.Collection} model 
 * @param {Object} options 
 */
export const ActivityBackend = function (method, model, options) {
  // This is what the Backbone.sync does
  // model.trigger("request", model, xmlHTTPRequestObject, options);

  if (method == "read") {
    testActivities.map((data) => {
      model.add(data);
    });
  } else {
    console.log(method);
  }
}