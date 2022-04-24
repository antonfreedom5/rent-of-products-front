import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {ProductModel} from "../../pages/product/model/product.model";

@Injectable()
export class ProductHttpService {
  private readonly BASE_API = 'http://localhost:8090/product'

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = () => this.httpClient.get<ProductModel[]>(this.BASE_API);

  public hasClients = (id: number) => this.httpClient.post<boolean>(`${this.BASE_API}/has-clients`, id);

  public add = (position: ProductModel) => this.httpClient.post(this.BASE_API, position);

  public delete = (id: number) => this.httpClient.delete(`${this.BASE_API}/${id}`);
}
