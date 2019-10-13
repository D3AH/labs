import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findRecord('event', 11, { include: 'presenters,presenters.session' });
  }
});
