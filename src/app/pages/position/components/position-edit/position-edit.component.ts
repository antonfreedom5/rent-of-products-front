import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {PositionModel} from "../../model/position.model";

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PositionModel,
              private readonly dialog: MatDialogRef<PositionEditComponent>) { }

  save = () => this.dialog.close(this.data);

  get isDisabled(): boolean {
    return Object.entries(this.data).some(item => item[0] !== 'id' && (item[1]?.length === 0 || !item[1]));
  }
}
