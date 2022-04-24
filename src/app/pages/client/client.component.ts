import { Component, OnInit } from '@angular/core';
import {filter, Observable, switchMap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

import {ClientEditComponent} from "./components/client-edit/client-edit.component";
import {ClientHttpService} from "../../services/http/client-http.service";
import {ClientModel} from "./model/client.model";
import {StorageModel} from "../storage/model/storage.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public columns = ['name', 'phone', 'address', 'products', 'edit', 'delete'];
  public clientList$?: Observable<StorageModel[]>;

  constructor(private readonly clientHttpService: ClientHttpService,
              private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.update();
  }

  public edit = (element?: ClientModel) => {
    const clientProduct: ClientModel = {
      id: 0,
      name: undefined,
      address: undefined,
      phone: undefined,
      products: undefined
    };
    this.matDialog.open(ClientEditComponent, {data: element || clientProduct})
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(item => this.clientHttpService.add(item))
      ).subscribe(this.update);
  }

  public delete = (id: number): void => {
    this.clientHttpService.delete(id).subscribe(this.update);
  }

  private update = (): void => {
    this.clientList$ = this.clientHttpService.getAll();
  }
}
