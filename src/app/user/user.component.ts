import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { usersapiService } from '../services/usersapi.service'
import { Users } from '../clases/users'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: Users;
  constructor(
    private ruta : ActivatedRoute,
    private _servicio: usersapiService
  ) {
      this.ruta.params.subscribe(params=>{
        console.log(params['id']);
        this._servicio.obtenerUsuario(params['id'])
        .subscribe(data =>{
          this.usuario = data.data
        });
      })
   }

  ngOnInit() {
  }



}
