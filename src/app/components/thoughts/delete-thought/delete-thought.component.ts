import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'mm-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  pensamento: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((pensamento) => (this.pensamento = pensamento));
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listThoughts']);
      });
    }
  }
  cancelarPensamento() {
    this.router.navigate(['/listThoughts']);
  }
}
