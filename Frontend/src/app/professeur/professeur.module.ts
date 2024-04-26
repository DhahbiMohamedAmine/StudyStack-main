import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';
import { SharedModule } from './shared/shared.module';
import { HeaderProfComponent } from './header-prof/header-prof.component';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [GestFichiersComponent,HeaderProfComponent,MenuComponent,DashbordComponent],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ProfesseurModule { }
