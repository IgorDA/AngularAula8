import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  // depois de todo o processo, importar o ReactiveFormsModule no app.module.ts

  formGroup : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      nome: ['Joaquin', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone: ['977261827', [Validators.required]],
      email: ['joaquin@gmail.com', [Validators.required, Validators.email]]
    })
   }

  ngOnInit() {
  }

}
