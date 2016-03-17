import Ember from 'ember';
import layout from '../templates/components/each-in';

const { typeOf } = Ember;
const { Component, get, computed } = Ember;

const EachInComponent = Component.extend({
  layout,

  keyValuePairs: computed('object', function() {
    let object = get(this, 'object');
    let keys = ['object', 'instance'].indexOf(typeOf(object)) !== -1 ? Object.keys(object) : [];

    return keys.map((key) => {
      return { key, value: get(object, key) };
    });
  })
});

EachInComponent.reopenClass({
  positionalParams: ['object']
});

export default EachInComponent;
