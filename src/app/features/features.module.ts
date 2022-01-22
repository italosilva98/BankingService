import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  imports: [ClienteModule],
  declarations: [],
  exports: [ClienteModule],
})
export class FeaturesModule {}
