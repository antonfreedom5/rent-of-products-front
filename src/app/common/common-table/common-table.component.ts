import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ClientModel} from "../../pages/client/model/client.model";
import {EmployeeModel} from "../../pages/employee/model/employee.model";
import {PositionModel} from "../../pages/position/model/position.model";
import {ProductModel} from "../../pages/product/model/product.model";
import {StorageModel} from "../../pages/storage/model/storage.model";

export type DataType = ClientModel | EmployeeModel | PositionModel | ProductModel | StorageModel;

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  public title = '';

  @Input() public data?: DataType[] | null;
  @Input() public columns?: string[];

  @Output() public editAction = new EventEmitter<DataType>();
  @Output() public deleteAction = new EventEmitter<number>();

  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  public save = (item: DataType): void => {
    this.editAction.emit(item);
  }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.data['title'];
  }
}
