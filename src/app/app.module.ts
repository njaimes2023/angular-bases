// -- ===================================================================
// --  proyecto : < 02-bases >
// --  seccion :  < AngularBases  > < seccion 05>
// --  file    :  sc_3\A01.03.Angular_basesPrimerProy.sql
// --  file    :   src\app\app.module.ts
// --  ==================================================================

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent

    //--Cpunter
    // HeroComponent,
    // ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
