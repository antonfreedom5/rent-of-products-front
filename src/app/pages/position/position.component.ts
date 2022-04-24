import { Component, OnInit } from '@angular/core';
import {filter, Observable, switchMap, tap} from "rxjs";
import {PositionModel} from "./model/position.model";
import {MatDialog} from "@angular/material/dialog";

import {PositionHttpService} from "../../services/http/position-http.service";
import {PositionEditComponent} from "./components/position-edit/position-edit.component";
import {EmployeeHttpService} from "../../services/http/employee-http.service";
import {InfoDialogComponent} from "../../common/info-dialog/info-dialog.component";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  public columns = ['name', 'edit', 'delete'];
  public positionList$?: Observable<PositionModel[]>;

  private readonly message = 'Внимание! У вас есть сотрудники с данной позицией.';

  constructor(private readonly positionHttpService: PositionHttpService,
              private readonly employeeHttpService: EmployeeHttpService,
              private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.update();
  }

  public edit = (element?: PositionModel) => {
    const position: PositionModel = { id: 0 };
    this.matDialog.open(PositionEditComponent, {data: element || position})
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(item => this.positionHttpService.add(item))
      ).subscribe(this.update);
  }

  public delete = (id: number): void => {
    this.positionHttpService.hasEmployees(id).pipe(
      tap(hasEmployees => {
        if (hasEmployees) this.matDialog.open(InfoDialogComponent, { data: this.message })
      }),
      filter(it => !it),
      switchMap(it => this.positionHttpService.delete(id))
    ).subscribe(this.update);
  }

  private update = (): Observable<PositionModel[]> => this.positionList$ = this.positionHttpService.getAll();
}
