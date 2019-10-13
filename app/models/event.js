import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  presenters: hasMany('presenter')
});
