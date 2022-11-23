import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
