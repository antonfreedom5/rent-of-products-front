import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {StorageModel} from "../../pages/storage/model/storage.model";

@Injectable()
export class StorageHttpService {
  private readonly BASE_API = 'http://localhost:8090/storage'

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = () => this.httpClient.get<StorageModel[]>(this.BASE_API);

  public hasProducts = (id: number) => this.httpClient.post<boolean>(`${this.BASE_API}/has-products`, id);

  public add = (employee: StorageModel) => this.httpClient.post(this.BASE_API, employee);

  public delete = (id: number) => this.httpClient.delete(`${this.BASE_API}/${id}`);
}
