import functionalModifier from 'ember-functional-modifiers';

export function onViewport(element, params, hash) {
  hash.action();
}

export default functionalModifier(onViewport);
