import {Component, Input} from '@angular/core';
import {Task} from "../../../../models/task.interface";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task!: Task;

}
