import {ProductModel} from "../../product/model/product.model";

export interface ClientModel {
  id?: number;
  name?: string;
  phone?: string;
  address?: string;
  products?: ProductModel[];
}
