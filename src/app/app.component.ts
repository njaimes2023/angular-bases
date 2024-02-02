// <!--  -- ===================================================================
//  --  proyecto : < 02-bases >
//  --  seccion :  < AngularBases  > < seccion 05>
//  --  fxle     :  sc_3\A01.03.Angular_basesPrimerProy.sql
//  --  file    :  src\app\app.component.ts
//  --  ================================================================== -->

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  public  title: string  = 'Mi primera app de Angular';
  // public  counter: number  = 1 ;

  // //--2Contador
  // increaseBy( value: number ):void {
  //   this.counter += value;
  // }

  // resetCounter() {
  //   this.counter = 10;
  // }
}
