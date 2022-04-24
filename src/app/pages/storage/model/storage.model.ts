import {ProductModel} from "../../product/model/product.model";

export interface StorageModel {
  id?: number;
  name?: string;
  phone?: string;
  address?: string;
  products?: ProductModel[];
}
