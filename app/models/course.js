import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  summary: DS.attr('string'),
  'image-info': DS.attr(),
  stages: DS.hasMany('course-stage')
});
