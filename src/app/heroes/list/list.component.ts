// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file     :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\heroes\list\list.component.ts
// --  ==================================================================

import { Component } from '@angular/core';

@Component({
  selector: 'app-Heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk', 'Thor'];
  // borrar ultimo heroe
  public deletedHero?: string;

  removeLastHero():void {
    //-- remueve ultimi elemento de la lista y lo retorna
    this.deletedHero = this.heroNames.pop();
  }

}
