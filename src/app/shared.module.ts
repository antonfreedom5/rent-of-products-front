import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";

import {CommonTableComponent} from "./common/common-table/common-table.component";
import {ClientHttpService} from "./services/http/client-http.service";
import {EmployeeHttpService} from "./services/http/employee-http.service";
import {PositionHttpService} from "./services/http/position-http.service";
import {ProductHttpService} from "./services/http/product-http.service";
import {StorageHttpService} from "./services/http/storage-http.service";
import {InfoDialogComponent} from "./common/info-dialog/info-dialog.component";

const components = [CommonTableComponent, InfoDialogComponent];
const services = [ClientHttpService, EmployeeHttpService, PositionHttpService, ProductHttpService, StorageHttpService];

@NgModule({
  declarations: [...components],
  providers: [...services],
  imports: [MatTableModule, CommonModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  exports: [...components]
})
export class SharedModule {}
