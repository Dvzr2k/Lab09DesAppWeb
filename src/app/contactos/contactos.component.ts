import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  contactoForm!: FormGroup;
  formularioEnviado: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviarFormulario() {
    this.formularioEnviado = true;

    if (this.contactoForm.valid) {
      // Aquí puedes realizar las acciones necesarias cuando el formulario es válido
      console.log('Formulario válido');
    } else {
      // Aquí puedes realizar las acciones necesarias cuando el formulario no es válido
      console.log('Formulario inválido');
    }
  }
}

