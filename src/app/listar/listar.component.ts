import { Component, OnInit, Input } from '@angular/core';
import { usersapiService } from '../services/usersapi.service'
import { Users } from '../clases/users'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private _usersapiService: usersapiService) { }

  lstUsers: Users;
  @Input() pageNumber: number;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    this.ruta.params.subscribe(params => {
      this._usersapiService.getUsers(params['pages'])
        .subscribe(response => {
          this.lstUsers = response
        });
    })
  }



}
