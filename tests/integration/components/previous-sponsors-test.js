import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('previous-sponsors', 'Integration | Component | previous sponsors', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{previous-sponsors}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#previous-sponsors}}
      template block text
    {{/previous-sponsors}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
