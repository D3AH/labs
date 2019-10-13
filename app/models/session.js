import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  presenter: belongsTo('presenter')
});
