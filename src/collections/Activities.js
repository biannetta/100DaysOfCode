import { Activity } from '../models/index.js';
import { ActivityBackend } from "../_backend/_ActivityBackend.js";

export const Activities = Backbone.Collection.extend({
  model: Activity,
  preinitialize: function () {
    this.on("add", (event) => console.log(event));
  },
  sync: ActivityBackend
})