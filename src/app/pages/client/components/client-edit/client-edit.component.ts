import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {ProductModel} from "../../../product/model/product.model";
import {ClientModel} from "../../model/client.model";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  public storageList?: ProductModel[];
  public control: FormControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: ClientModel,
              private readonly dialog: MatDialogRef<ClientEditComponent>,
              private readonly productHttpService: ProductHttpService) { }

  ngOnInit(): void {
    this.productHttpService.getAll().subscribe(data => {
      this.storageList = data;
      this.control.setValue(data.filter(item => this.data.products?.map(item => item.id).includes(item.id)));
    });
  }

  save = (): void => {
    this.dialog.close(this.data);
  }

  get isDisabled(): boolean {
    if (this.control.value)this.data.products = this.control.value;
    return Object.entries(this.data).some(item => item[0] !== 'id' && (item[1]?.length === 0 || !item[1]));
  }
}
