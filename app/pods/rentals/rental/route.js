import Route from '@ember/routing/route';

export default class RentalsRentalRoute extends Route {
  model({ id }) {
    return this.store.loadRecord('rental', id);
  }
}
