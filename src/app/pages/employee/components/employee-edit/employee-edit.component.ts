import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

import {EmployeeModel} from "../../model/employee.model";
import {PositionHttpService} from "../../../../services/http/position-http.service";
import {PositionModel} from "../../../position/model/position.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  public positionList?: PositionModel[];
  public control: FormControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: EmployeeModel,
              private readonly dialog: MatDialogRef<EmployeeEditComponent>,
              private readonly positionHttpService: PositionHttpService) { }

  ngOnInit() {
    this.positionHttpService.getAll().subscribe(data => {
      this.positionList = data;
      this.control.setValue(data.find(item => item.id === this.data.position?.id));
    });
  }

  save = (): void => {
    this.dialog.close(this.data);
  }

  get isDisabled(): boolean {
    this.data.position = this.control.value;
    return Object.entries(this.data).some(item => item[0] !== 'id' && (item[1]?.length === 0 || !item[1]));
  }
}
