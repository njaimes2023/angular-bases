// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  fxle     : sc_3\A01.04.Angular_ExpandirBases.sql  . (Version1)
// --  file    :   src\app\dbz\components\add-character\add-character.component.ts
// --  ==================================================================
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {


  //-- "8@Output() - Emitir eventos al padre
  //-- eventemmitter va a emitire un Character>. instancia creada de este emisor de evento
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  //-- captura la informacion que escribe el usuario  en el formulario
  emitCharacter():void {

    // debugger;
    // console.log (this.character );

    // SI NO hay onombre no hace nada
    if ( this.character.name.length === 0 ) return;

    //-- "8@Output() - Emitir eventos al padre
    this.onNewCharacter.emit(this.character);
    //-- regresar el obeto al valor inicial o por defecto
    this.character = { name: '', power: 0 };
  }

}
