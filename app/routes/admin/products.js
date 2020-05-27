import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AdminProductsRoute extends Route {
	@service store;

	model(){
		return this.store.findAll('product');
	}


	setupController(controller, model) {
		this._super(controller, model);

		controller.set('newProduct', this.store.createRecord('product'));
	}

	@action
	async addNewProduct(product) {
		product.save().then(
        product => {
          console.info('Response:', product);
          this.controller.set('newProduct', this.store.createRecord('product'));
        },
        error => {
          console.error('Error from server:', error);
        });
	}

	@action
	async editProduct(product){
		product.set('isEditing', true);
	}

	@action
	async updateProduct(product){
	    product.save().then(
	      product => product.set('isEditing', false)
	    );
	}

	@action
	async cancelEditProduct(product){
		product.set('isEditing', false);
	}

	@action
	async deleteProduct(product){
		product.destroyRecord();
	}
}
