import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {PositionModel} from "../../pages/position/model/position.model";

@Injectable()
export class PositionHttpService {
  private readonly BASE_API = 'http://localhost:8090/position'

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = () => this.httpClient.get<PositionModel[]>(this.BASE_API);

  public hasEmployees = (id: number) => this.httpClient.post<boolean>(`${this.BASE_API}/has-employees`, id);

  public add = (position: PositionModel) => this.httpClient.post(this.BASE_API, position);

  public delete = (id: number) => this.httpClient.delete(`${this.BASE_API}/${id}`);
}
