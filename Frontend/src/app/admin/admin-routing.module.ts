import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestProfComponent } from './gest-prof/gest-prof.component';

const routes: Routes = [
  {path:"",component:GestProfComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
