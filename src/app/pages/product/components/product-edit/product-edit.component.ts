import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

import {ProductModel} from "../../model/product.model";
import {StorageHttpService} from "../../../../services/http/storage-http.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public storageList?: ProductModel[];
  public control: FormControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductModel,
              private readonly dialog: MatDialogRef<ProductEditComponent>,
              private readonly storageHttpService: StorageHttpService) { }

  ngOnInit() {
    this.storageHttpService.getAll().subscribe(data => {
      this.storageList = data;
      this.control.setValue(data.find(item => item.id === this.data.storage?.id));
    });
  }

  save = () => {
    this.dialog.close(this.data);
  }

  get isDisabled(): boolean {
    if (this.control.value) this.data.storage = this.control.value;
    return Object.entries(this.data).some(item => item[0] !== 'id' && (item[1]?.length === 0 || !item[1]));
  }
}
