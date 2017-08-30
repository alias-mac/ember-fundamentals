import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    // this is how it should be if the API supported it
    // return this.store.query('course', {page: 1});

    return this.store.query('course', { page: 1 }).then((courses) => {
      this.courses = courses;
      return Ember.Object.create({
        list: courses.slice(0, 2)
      });
    });

    // return this.store.findAll('course');
  },

  actions: {
    loadMore() {
      debugger;
      //this.get('controller').set('model', this.courses.slice(2, 4));
      const newArr = this.courses.slice(1, 3);
      this.get('controller.model').set('list', newArr);
      // this.get('controller.model').get('list').splice(0, 2, ...newArr);
    }
  }
});
