import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { ServicosPrestadosModule } from './servicos-prestados/servicos-prestados.module';

import { ClientesService  } from './clientes.service';
import { ServicosPrestadosService } from './servicos-prestados.service';
import { AutenticacaoService } from './autenticacao.service';
import { TokenInterceptor } from './token.interceptor';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosPrestadosModule
  ],
  providers: [
    ClientesService,
    ServicosPrestadosService,
    AutenticacaoService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
