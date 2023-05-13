import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AutenticarGuard } from './guards/autenticar.guard';
import { ChartModule } from 'angular-highcharts';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoverComponent } from './components/password-recover/password-recover.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CadastrarContatosComponent } from './components/admin/cadastrar-contatos/cadastrar-contatos.component';
import { ConsultarContatosComponent } from './components/admin/consultar-contatos/consultar-contatos.component';
import { EditarContatosComponent } from './components/admin/editar-contatos/editar-contatos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoverComponent,
    DashboardComponent,
    CadastrarContatosComponent,
    ConsultarContatosComponent,
    EditarContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ChartModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgxPaginationModule,
    FilterPipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AutenticarGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




