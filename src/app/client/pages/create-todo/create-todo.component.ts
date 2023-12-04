import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskWithoutId} from "../../models/task.interface";
import {TodoService} from "../../todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public form: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly todoService: TodoService) {
    this.form = this.getFormGroup();
  }
  public createTask(data: TaskWithoutId): void {
    this.todoService.addTask(data);
    this.router.navigate(['']);
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]]
    })
  }

}
