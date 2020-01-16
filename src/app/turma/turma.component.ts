import { Component } from "@angular/core";

import {
  PoNotificationService
} from "@portinari/portinari-ui";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TurmaService } from "./turma.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-turma",
  templateUrl: "./turma.component.html"
})
export class TurmaComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private turmaService: TurmaService, 
    private poNotification: PoNotificationService) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      descricao: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(160)
        ])
      ],
      anoLetivo: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(999999)
        ])
      ],
      periodoLetivo: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(999999)
        ])
      ],
      numeroVagas: [
        "",
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(999999)
        ])
      ]
    });
  }

  save() {
    console.log(this.reactiveForm.value);
    this.turmaService.criar(this.reactiveForm.value).subscribe(
      () => {
        this.poNotification.success("Cliente inserido com Sucesso");
      }
    );
  }

}
