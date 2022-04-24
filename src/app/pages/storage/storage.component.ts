import { Component, OnInit } from '@angular/core';
import {filter, Observable, switchMap, tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

import {ProductHttpService} from "../../services/http/product-http.service";
import {StorageModel} from "./model/storage.model";
import {StorageHttpService} from "../../services/http/storage-http.service";
import {StorageEditComponent} from "./components/storage-edit/storage-edit.component";
import {InfoDialogComponent} from "../../common/info-dialog/info-dialog.component";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  public columns = ['name', 'phone', 'address', 'edit', 'delete'];
  public storageList$?: Observable<StorageModel[]>;

  private readonly message = 'Внимание! У вас есть товары на данном складе.';

  constructor(private readonly storageHttpService: StorageHttpService,
              private readonly productHttpService: ProductHttpService,
              private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.update();
  }

  public edit = (element?: StorageModel) => {
    const emptyStorage: StorageModel = {
      id: 0,
      name: '',
      address: '',
      phone: ''
    }
    this.matDialog.open(StorageEditComponent, {data: element || emptyStorage})
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(item => this.storageHttpService.add(item))
      )
      .subscribe(this.update);
  }

  public delete = (id: number): void => {
    this.storageHttpService.hasProducts(id).pipe(
      tap(hasEmployees => {
        if (hasEmployees) this.matDialog.open(InfoDialogComponent, { data: this.message })
      }),
      filter(it => !it),
      switchMap(it => this.storageHttpService.delete(id))
    ).subscribe(this.update);
  }

  private update = (): void => {
    this.storageList$ = this.storageHttpService.getAll();
  }
}
