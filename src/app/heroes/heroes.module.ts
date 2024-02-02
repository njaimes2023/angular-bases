
// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file    :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\heroes\heroes.module.ts
// --  ==================================================================

import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  // -- error Directiva *ngIf se debe export o import
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}


