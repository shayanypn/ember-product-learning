import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

	name(i) {return `Product ${i}`},

	sku(i) {return `sku ${i}`},

	unitPrice(i) {return parseFloat(Math.random()*100).toFixed(2)},

	category() {return `Category 0`},
});
