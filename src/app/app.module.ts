import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule }  from '@angular/common/http'
import { usersapiService }  from './services/usersapi.service'
import { RouterModule }  from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';


const routes: Routes=[
  {path:'listar/:pages', component:ListarComponent},
  {path:'crear', component:CrearUsuarioComponent},
  {path:'user/:id', component:UserComponent},
  {path:'update/:id', component:UpdateUsuarioComponent},
  {path: '', redirectTo: 'listar/1', pathMatch: 'full' },
  {path: '**', redirectTo: 'listar/1', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    UserComponent,
    CrearUsuarioComponent,
    UpdateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[usersapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
