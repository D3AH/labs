import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Name ${i}`;
  },

  afterCreate(presenter, server) {
    server.createList('session', 1, { presenter: presenter });
  }
});
