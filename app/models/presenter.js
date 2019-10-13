import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  event: belongsTo('event'),
  session: belongsTo('session')
});
