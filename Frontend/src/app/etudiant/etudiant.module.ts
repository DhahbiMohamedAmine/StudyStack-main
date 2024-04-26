import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { GestFichiersComponent } from './gest-fichiers/gest-fichiers.component';
import { SharedModule } from './shared/shared.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderEtudiantComponent } from './header-etudiant/header-etudiant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentComponent } from './document/document.component';



@NgModule({
  declarations: [GestFichiersComponent, DashbordComponent, MenuComponent, HeaderEtudiantComponent, DocumentComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    SharedModule,
    NgbModule
    
  ]
})
export class EtudiantModule { }

