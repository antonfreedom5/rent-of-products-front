import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {StorageModel} from "../../model/storage.model";

@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.scss']
})
export class StorageEditComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: StorageModel,
              private readonly dialog: MatDialogRef<StorageEditComponent>) { }

  save = () => this.dialog.close(this.data);

  get isDisabled(): boolean {
    return Object.entries(this.data).some(item => item[0] !== 'id' && (item[1].length === 0 || !item[1]));
  }
}
