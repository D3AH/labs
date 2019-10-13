import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Event ${i}`;
  },

  afterCreate(event, server) {
    // event.update({
    //   presenters: server.create('presenter')
    // });
    server.createList('presenter', 1, { event: event });
  }
});
