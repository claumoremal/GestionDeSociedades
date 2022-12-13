import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarNavComponent } from './sidebarNav/sidebarNav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ListadoSociedadesComponent } from './listado-sociedades/listado-sociedades.component';
import { InfoSociedadesComponent } from './info-sociedades/info-sociedades.component';

@NgModule({
  declarations: [									
    AppComponent,
      LoginComponent,
      HomeComponent,
      SidebarNavComponent,
      TopbarComponent,
      ForgotPasswordComponent,
      NewUserComponent,
      ListadoSociedadesComponent,
      InfoSociedadesComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
