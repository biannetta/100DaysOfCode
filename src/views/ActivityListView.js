const html = String.raw;

export const ActivityListView = Backbone.View.extend ({
  tagName: 'div',
  render: function () {
    let template = html`
      <h3>Activities</h3>
      <div id="activities" class="table">
        <div class="table__row table__row--header">
          <div class="table__row__col--title">Date</div>
          <div class="table__row__col--title">Type</div>
          <div class="table__row__col--title">Quantity</div>
        </div>
      </div>
    `;
    
    this.$el.append(template);
    
    return this;
  }
});