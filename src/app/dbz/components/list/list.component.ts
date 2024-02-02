// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  fxle     : sc_3\A01.04.Angular_ExpandirBases.sql  . (Version1)
// --  file    :  src\app\dbz\components\list\list.component.ts
// --  ==================================================================

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


   //-- "5@Input() - Recibir del padre"
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ):void {
    // onDeleteCharacter( index: number  ):void {
      console.log (  'onDeleteCharacter.id ', id)
    if ( !id ) return;
    this.onDelete.emit( id);
  }
}
