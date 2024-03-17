import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:"",component:DashbordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
