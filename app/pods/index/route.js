import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return this.store.findAll('rental');
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('rentals', model);
  }
}
