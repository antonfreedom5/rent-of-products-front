import { Component, OnInit } from '@angular/core';
import {filter, Observable, switchMap, tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

import {StorageModel} from "../storage/model/storage.model";
import {ProductHttpService} from "../../services/http/product-http.service";
import {ProductModel} from "./model/product.model";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {InfoDialogComponent} from "../../common/info-dialog/info-dialog.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public columns = ['name', 'price', 'count', 'storage', 'edit', 'delete'];
  public productList$?: Observable<StorageModel[]>;

  private readonly message = 'Внимание! У вас есть клиенты с данным товаром.';

  constructor(private readonly productHttpService: ProductHttpService,
              private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.update();
  }

  public edit = (element?: ProductModel) => {
    const emptyProduct: ProductModel = {
      id: 0,
      count: 0,
      price: 0,
      name: '',
      storage: undefined
    };
    this.matDialog.open(ProductEditComponent, {data: element || emptyProduct})
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(item => this.productHttpService.add(item))
      ).subscribe(this.update);
  }

  public delete = (id: number): void => {
    this.productHttpService.hasClients(id).pipe(
      tap(hasEmployees => {
        if (hasEmployees) this.matDialog.open(InfoDialogComponent, { data: this.message })
      }),
      filter(it => !it),
      switchMap(it => this.productHttpService.delete(id))
    ).subscribe(this.update);
  }

  private update = (): void => {
    this.productList$ = this.productHttpService.getAll();
  }
}
