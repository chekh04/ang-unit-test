import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  public form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.getFormGroup();
  }
  public createTask(data: {description: string}): void {
    console.log(data)
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required]]
    })
  }

}
