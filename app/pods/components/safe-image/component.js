import Component from '@glimmer/component';

export default class SafeImageComponent extends Component {
  fallbackImageEvent(event) {
    const target = event.target;

    target.src = 'https://via.placeholder.com/300';
  }
}
