import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;

  @attr('string') sku;

  @attr('number') unitPrice;

  @attr('boolean') isEditing;
}
