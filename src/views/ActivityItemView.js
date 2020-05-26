import { dtFormatter } from '../_helpers/_dateFormatter.js';

const html = String.raw;

export const ActivityItemView = Backbone.View.extend ({
  tagName: 'div',
  className: 'table__row',
  template: _.template(document.getElementById("activity-item").innerHTML),
  render: function () {
    this.el.innerHTML = html`
      <div>${dtFormatter.format(this.model.datetime)}</div>
      <div>${this.model.get('type')}</div>
      <div>${this.model.get('quantity')}</div>
    `;

    // NB: This won't work because template is a String and 
    //     appendChild requires an element
    //
    // this.el.appendChild(template);
    
    //This works because the jQuery implementation of append() accepts strings
    // this.$el.html(this.template(this.model.attributes));

    return this;
  }
});