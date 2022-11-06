import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubeFutebolComponent } from './component/admin/clube-futebol/clube-futebol.component';
import { GerenciamentoVendedorComponent } from './components/gerenciamento-vendedor/gerenciamento-vendedor.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'clubes-futebol' , component: ClubeFutebolComponent},
  {path:'vendedores' , component: GerenciamentoVendedorComponent},
  {path:'inicio' , component: InicioComponent},
  {path:'' , component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
