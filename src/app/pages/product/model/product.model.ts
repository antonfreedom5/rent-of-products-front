import {StorageModel} from "../../storage/model/storage.model";

export interface ProductModel {
  id?: number;
  name?: string;
  price?: number;
  count?: number;
  storage?: StorageModel;
}
