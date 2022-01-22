import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { DetalhesClienteComponent } from './features/cliente/pages/detalhes-cliente/detalhes-cliente.component';
import { ListarContasComponent } from './features/cliente/pages/listar-contas/listar-contas.component';
import { LoginClienteComponent } from './features/cliente/pages/login-cliente/login-cliente.component';


const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',component: LoginClienteComponent },
  { path: 'listar-contas',component: ListarContasComponent },
  { path: 'detalhar-cliente',component: DetalhesClienteComponent },

  { path: '**', pathMatch: 'full', redirectTo: '/login' }


];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
