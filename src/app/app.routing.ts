import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importación de componentes

import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ListadoSociedadesComponent } from './listado-sociedades/listado-sociedades.component';
import { InfoSociedadesComponent } from './info-sociedades/info-sociedades.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

const appRoutes: Routes = [
    //Ruta inicial
    {path: "", component: HomeComponent},
    //Rutas de navegación entre componentes
    {path: "home", component: HomeComponent},
    {path: "forgotPassword", component: ForgotPasswordComponent},
    {path: "newUser", component: NewUserComponent},
    {path: "listadoSociedades", component: ListadoSociedadesComponent},
    {path: "infoSociedades", component: InfoSociedadesComponent},
    {path: "listadoUsuarios", component: ListadoUsuariosComponent},
    //Ruta con falla 404
    {path: "**", component: HomeComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

