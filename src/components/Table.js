const html = String.raw;

export const TableView = Backbone.View.extend({
  tagName: 'div',
  render: function () {
    return html`
      <div class="table">
        <div class="table__header">
          <div class="table__column--title">Date</div>
          <div class="table__column--title">Type</div>
          <div class="table__column--title">Quantity</div>
        </div>
        <div class="table__body">
          
        </div>
      </div>
    `;
  }
});