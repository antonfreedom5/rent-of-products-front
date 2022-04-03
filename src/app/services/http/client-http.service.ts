import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ClientModel} from "../../pages/client/model/client.model";

@Injectable()
export class ClientHttpService {
  private readonly BASE_API = 'http://localhost:8080/client'

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = () => this.httpClient.get(this.BASE_API);

  public add = (client: ClientModel) => this.httpClient.post(this.BASE_API, client);

  public delete = (id: number) => this.httpClient.delete(`${this.BASE_API}/${id}`);
}
