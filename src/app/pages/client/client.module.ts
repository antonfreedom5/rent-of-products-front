import { NgModule } from '@angular/core';
import {ClientComponent} from "./client.component";
import {ClientRoutingModule} from "./client-routing.module";

@NgModule({
  declarations: [ClientComponent],
  imports: [ClientRoutingModule],
  providers: []
})
export class ClientModule {}
