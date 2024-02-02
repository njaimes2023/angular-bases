 // -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  fxle     : sc_3\A01.04.Angular_ExpandirBases.sql  . (Version1)
// --  file    :   src\app\dbz\dbz.module.ts
// --  ==================================================================

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    //-- <FormsModule de @angular/forms>        <input [(ngModel)]="userName">
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
