import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { usersapiService } from '../services/usersapi.service'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  registrationForm: FormGroup
  constructor(private fb: FormBuilder, private _servicio: usersapiService) {

  }

  submitted = false;

  mostrarResultado: any
  ngOnInit() {
    this.registrationForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidopat: [''],
      apellidomat: [''],
      email: [''],
      fchnac: [''],
      fchingreso: [''],
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
  get fchingreso() {
    return this.registrationForm.get('fchingreso');
  }
  save() {
    console.log("datos:" + this.registrationForm.value)
    this._servicio.crearUsuario(this.registrationForm.value)
      .subscribe(response => {
        this.mostrarResultado = response,
          error => console.log(error);
      });
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
