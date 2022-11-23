import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'mm-make-thoughts',
  templateUrl: './make-thoughts.component.html',
  styleUrls: ['./make-thoughts.component.css'],
})
export class MakeThoughtsComponent implements OnInit {
  pensamento: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  formulario!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listThoughts']);
    });
  }

  cancelPensamento() {
    this.router.navigate(['/listThoughts']);
  }
}
