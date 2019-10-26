import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  search = 'Title 1';

  @action
  onResult(result) {
    this.set('showFade', false);
    this.set('rentals', result);
    this.set('showFade', true);
  }
}
