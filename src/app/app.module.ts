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
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './Produtos/produtos.service';
import { ListaProdutoComponent } from './Produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootConfig,{useHash:false})]
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
