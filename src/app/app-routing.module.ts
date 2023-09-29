import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {path: '', component: NotesComponent},
  {path: 'trash', component: TrashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
