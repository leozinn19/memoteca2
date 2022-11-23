import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'mm-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listaPensamentos: Thought[] = [];

  constructor(private service: ThoughtService) {}
  ngOnInit(): void {
    this.service
      .listar()
      .subscribe(
        (listaPensamentos) => (this.listaPensamentos = listaPensamentos)
      );
  }
}
