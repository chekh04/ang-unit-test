import { Component } from '@angular/core';
import {TodoService} from "../../todo.service";
import {Observable} from "rxjs";
import {Task} from "../../models/task.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public toDoList$: Observable<Task[]> = this.todoService.toDoList$;
  constructor(private readonly todoService: TodoService) {
  }

}
