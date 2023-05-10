import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './Navegacao/menu/menu.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { FooterComponent } from './Navegacao/footer/footer.component';
import { SobreComponent } from './Institucional/sobre/sobre.component';
import { ContatoComponent } from './Institucional/contato/contato.component';
import { rootConfig } from './app.rotas';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootConfig,{useHash:false})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
