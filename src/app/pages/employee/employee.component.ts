import { Component, OnInit } from '@angular/core';
import {filter, Observable, switchMap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

import {EmployeeHttpService} from "../../services/http/employee-http.service";
import {EmployeeModel} from "./model/employee.model";
import {EmployeeEditComponent} from "./components/employee-edit/employee-edit.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public columns = ['name', 'phone', 'address', 'position', 'edit', 'delete'];
  public employeeList$?: Observable<EmployeeModel[]>;

  constructor(private readonly employeeHttpService: EmployeeHttpService,
              private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.update();
  }

  public edit = (element?: EmployeeModel) => {
  const emptyEmployee: EmployeeModel = {
      id: 0,
      phone: undefined,
      address: undefined,
      name: undefined,
      position: undefined
    }
    this.matDialog.open(EmployeeEditComponent, {data: element || emptyEmployee})
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(item => this.employeeHttpService.add(item)))
      .subscribe(this.update);
  }

  public delete = (id: number): void => {
    this.employeeHttpService.delete(id).subscribe(this.update);
  }

  private update = (): void => {
    this.employeeList$ = this.employeeHttpService.getAll();
  }
}
