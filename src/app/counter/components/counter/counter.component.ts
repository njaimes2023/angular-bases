// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file     :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\counter\counter.component.ts
// --  ==================================================================
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1> Hola Counter </h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
