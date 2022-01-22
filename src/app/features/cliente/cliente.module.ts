import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  imports: [SharedModule, ClienteRoutingModule, ModalModule.forRoot()],
  declarations: [ClienteRoutingModule.components],
  exports: [ClienteRoutingModule.components, SharedModule, ModalModule],
  providers: [BsModalService],
})
export class ClienteModule {}
