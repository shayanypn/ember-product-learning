import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AdminCategoriesRoute extends Route {
	model() {
		return [
			{
				id: 1,
				name: 'First Category'
			},
			{
				id: 2,
				name: 'Second Category'
			}
		];
	}

	@action
	async addNewCategory(id, name) {
		this.controller.get('model').pushObject({ id, name });
	}

	@action
	deleteCategory(category) {
		this.controller.get('model').removeObject(category);
	}
}
