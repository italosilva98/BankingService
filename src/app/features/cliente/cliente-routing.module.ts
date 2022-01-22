import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { EnderecoContatoComponent } from './components/endereço-contato/endereço-contato.component';
import { StatusContaComponent } from './components/status-conta/status-conta.component';

import { DetalhesClienteComponent } from './pages/detalhes-cliente/detalhes-cliente.component';
import { ListarContasComponent } from './pages/listar-contas/listar-contas.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';

const components = [
  LoginClienteComponent,
  ListarContasComponent,
  DetalhesClienteComponent,
  DadosPessoaisComponent,
  StatusContaComponent,
  EnderecoContatoComponent,
];

const routes: Routes = [
  {
    path: '',
    component: LoginClienteComponent,
    children: [
      { path: 'listar', component: ListarContasComponent },
      { path: 'detalhes', component: DetalhesClienteComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {
  static components = [components];
}
