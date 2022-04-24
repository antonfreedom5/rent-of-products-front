import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private readonly dialog: MatDialogRef<InfoDialogComponent>,) {
  }

  public close = (): void => this.dialog.close();
}
