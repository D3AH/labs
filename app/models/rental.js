import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  price: attr('number'),
  rooms: attr('number'),
  bathrooms: attr('number'),
  area: attr('number'),
  buildArea: attr('number'),
  img: attr('string')
});
