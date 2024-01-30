
// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file    :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\counter\counter.module.ts
// --  ==================================================================

import { NgModule } from '@angular/core';
// import { CounterComponent } from './components/counter/counter.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
