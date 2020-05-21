import { DateView } from '../components/DateFormat.js';

const html = String.raw;

export const ActivityItemView = Backbone.View.extend ({
  tagName: 'div',
  render: function () {
    const formattedDate = new DateView({ model: this.model});

    let template = html`
      <div class="activity__date">${formattedDate.render()}</div>
      <div>${this.model.get('type')}</div>
      <div>${this.model.get('quantity')}</div>
    `;
    // NB: This won't work because template is a String and 
    //     appendChild requires an element
    //
    // this.el.appendChild(template);
    
    //This works because the jQuery implementation of append() accepts strings
    this.$el.append(template);
    
    return this;
  }
});