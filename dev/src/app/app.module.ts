import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { TemplateFromComponent } from './template-from/template-from.component';
import { DefaultPageComponent } from './default-page/default-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    PanelComponent,
    TemplateFromComponent,
    DefaultPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
