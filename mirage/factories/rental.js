import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Title ${i}`;
  },

  description(i) {
    return `Description ${i}`;
  },

  price() {
    return Math.random() * 1000;
  },

  rooms() {
    return parseInt(Math.random() * 10);
  },

  bathrooms() {
    return parseInt(Math.random() * 5);
  },

  area() {
    return parseInt(Math.random() * 15);
  },

  buildArea() {
    return parseInt(Math.random() * 30);
  },

  img($i) {
    return `img/rentals/rental-${$i % 6}.jpg`;
  }
});
