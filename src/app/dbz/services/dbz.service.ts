// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  fxle     : sc_3\A01.04.Angular_ExpandirBases.sql  . (Version1)
// --  file    :  src\app\dbz\services\dbz.service.ts
// --  ==================================================================
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

 //-- indica que es un servicio
@Injectable({
  providedIn: 'root'   //-- se convierte en singleton . la misma instancia en toda la aplicacion
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //-- "8@Output() - Emitir eventos al padre
    addCharacter( character: Character ):void {
      const newCharacter: Character = { id: uuid(), ...character };
    //-- this.dbzService.addCharacter( character );
       this.characters.push(newCharacter);
        console.log ('mainPage')
        console.log (newCharacter)
  }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }


}

