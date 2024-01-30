// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file    :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\heroes\hero\hero.component.ts
// --  ==================================================================
import { Component } from '@angular/core';

@Component({
  selector: 'app-Heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;

  //   document.querySelectorAll('h1')!.forEach( element => {
  //     element.innerHTML = '<h1>Desde Angular</h1>';
  //   });
  }


}
