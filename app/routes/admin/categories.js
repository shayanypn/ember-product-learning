import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AdminCategoriesRoute extends Route {
	@service store;

	model() {
		return this.store.findAll('category');
	}

	setupController(controller, model) {
		this._super(controller, model);

		controller.set('newCategory', this.store.createRecord('category'));
	}

	@action
	async addNewCategory(newCategory) {
      newCategory.save().then(
        category => {
          console.info('Response:', category);
          this.controller.set('newCategory', this.store.createRecord('category'));
        },
        error => {
          console.error('Error from server:', error);
        });
    }

	@action
  async editCategory(category) {
      category.set('isEditing', true);
  }

  @action
  async updateCategory(category) {
    category.save().then(
      category => category.set('isEditing', false)
    );
  }
s
	@action
	async deleteCategory(category) {
		category.destroyRecord();
	}
}
