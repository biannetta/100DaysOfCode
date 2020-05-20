export const ActivitiesView = Backbone.View.extend ({
  tagName: 'div',
  render: function () {
/*  activities.forEach( activity => {
      let item = document.createElement('li');
      item.innerHTML = activity.get('type');
      activityList.appendChild(item);
    });
*/
    this.el.innerHTML = "Hello, World";
    return this;
  }
});