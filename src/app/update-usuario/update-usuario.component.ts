import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { usersapiService } from '../services/usersapi.service'
import { Users } from '../clases/users'
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  registrationForm: FormGroup
  usuario: Users;
  submitted = false;
  mostrarResultado:any

  constructor(
    private fb: FormBuilder,
    private ruta : ActivatedRoute,
    private _servicio: usersapiService
  ) {
    this.ruta.params.subscribe(params=>{
      this._servicio.obtenerUsuario(params['id'])
      .subscribe(data =>{
        this.usuario = data.data
      });
    })
   }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidopat: [''],
      apellidomat: [''],
      email: [''],
      fchnac: [''],
      fchtermino: [''],
  });

  }
  get nombre() {
    return this.registrationForm.get('nombre');
  }
  get apellidopat() {
    return this.registrationForm.get('apellidopat');
  }
  get apellidomat() {
    return this.registrationForm.get('apellidomat');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get fchnac() {
    return this.registrationForm.get('fchnac');
  }
  get fchtermino() {
    return this.registrationForm.get('fchtermino');
  }
  save() {
    this.ruta.params.subscribe(params=>{
      this._servicio.updateUsuario(params['id'],this.registrationForm.value)
      .subscribe(response =>{
        this.mostrarResultado = response,
        error => console.log(error);
      });
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
