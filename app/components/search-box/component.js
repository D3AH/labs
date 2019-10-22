import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class SearchBoxComponent extends Component {
  @service store;

  rentals = [];

  @(task(function* () {
    // Wait 2.5 seconds to start searching
    yield timeout(2000)
    // Quering...
    let result  = yield this.store.query('rental', {
      title: this.query
    });

    this.onResult(result);
  }).drop()) search;
}
