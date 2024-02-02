// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  fxle     : sc_3\A01.04.Angular_ExpandirBases.sql  . (Version1)
// --  file    :   src\app\dbz\pages\main-page.component.ts version1
// --  ==================================================================
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
//
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

   constructor( private dbzService: DbzService ) {}

//  ////--"5@Input() - Recibir del padre"
//   public characters: Character[] = [
//     {
//       name: 'Krillin',
//       power: 1000
//     },
//     {
//       name: 'Goku',
//       power: 5000
//     },
//     {
//       name: 'Vegeta',
//       power: 2500
//     },
//   ];

   get characters(): Character[] {
     return [...this.dbzService.characters];
   }

//   ////-- "8@Output() - Emitir eventos al padre
    onNewCharacter( character: Character ):void {
      this.dbzService.addCharacter( character );
        console.log ('mainPage')
        console.log (character)
  }
//   //// --9eLIMINAR  personaje
  onDeleteCharacter( id: string ):void {
     this.dbzService.deleteCharacterById( id );
  }



}
