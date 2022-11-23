import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { MakeThoughtsComponent } from './components/thoughts/make-thoughts/make-thoughts.component';

const routes: Routes = [
  { path: 'makeThoughts', component: MakeThoughtsComponent },
  { path: 'listThoughts', component: ListThoughtsComponent },
  { path: '', redirectTo: 'listThoughts', pathMatch: 'full' },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'thoughts/editThought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
