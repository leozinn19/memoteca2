import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'mm-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() pensamento: Thought = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
  };

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
