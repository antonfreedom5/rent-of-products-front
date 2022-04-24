import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

import {EmployeeModel} from "../../pages/employee/model/employee.model";

@Injectable()
export class EmployeeHttpService {
  private readonly BASE_API = 'http://localhost:8090/employee'

  constructor(private readonly httpClient: HttpClient) {}

  public getAll = () => this.httpClient.get<EmployeeModel[]>(this.BASE_API);

  public add = (employee: EmployeeModel) => this.httpClient.post(this.BASE_API, employee);

  public delete = (id: number) => this.httpClient.delete(`${this.BASE_API}/${id}`);
}
