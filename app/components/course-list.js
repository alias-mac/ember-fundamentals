import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['course-list'],
  tagName: 'ul',

  bindingList: Ember.computed('list.@each', function() {
    debugger;
    return this.get('list');
  }),

  init() {
    this._super(...arguments);
    debugger;
  },

  didUpdateAttrs() {
    debugger;
  },

  didReceiveAttrs() {
    debugger;
  }

});
