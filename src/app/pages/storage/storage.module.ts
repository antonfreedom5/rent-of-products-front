import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

import {SharedModule} from "../../shared.module";
import {StorageComponent} from "./storage.component";
import {StorageEditComponent} from "./components/storage-edit/storage-edit.component";
import {StorageRoutingModule} from "./storage-routing.module";

@NgModule({
  declarations: [StorageComponent, StorageEditComponent],
    imports: [StorageRoutingModule, CommonModule, SharedModule, FormsModule, MatSelectModule, ReactiveFormsModule, MatButtonModule]
})
export class StorageModule {}
