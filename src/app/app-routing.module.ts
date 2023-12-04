import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client/pages/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./client/pages/create-todo/create-todo.module').then(m => m.CreateTodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
