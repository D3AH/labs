import Controller from '@ember/controller';
import fade from 'ember-animated/transitions/fade';
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';
import scale from 'ember-animated/motions/scale';
import { action } from '@ember/object';

export default Controller.extend({
  // transition: fade,
  transition: function * ({ insertedSprites, removedSprites, beacons}) {
    console.log('start-transition');
    insertedSprites.forEach(fadeIn);
    removedSprites.forEach(fadeOut);
    console.log('end-transition');
  },

  showFade: false,
  search: 'Title 1',

  @action
  onResult(result) {
    this.set('showFade', false);
    this.set('rentals', result);
    this.set('showFade', true);
  },

  @action
  makeTransition() {
    console.log('pre-transition');
    this.toggleProperty('showFade');
  },

  @action
  dismiss() {
    console.log('dismiss');
    this.set('showFade', false);
  }
});
