import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Task, TaskWithoutId} from "./models/task.interface";

const DEFAULT_TASKS: Task[] = [
  {id: 0, description: 'My first task'},
  {id: 1, description: 'Do homework'},
]

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private toDoListSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(DEFAULT_TASKS);
  constructor() {
  }
  get toDoList$(): Observable<any[]> {
    return this.toDoListSource.asObservable();
  }

  addTask(task: TaskWithoutId): void {
    const generatedTask: Task =
      {
        ...task,
        id: this.generateTaskId()
      }
    this.toDoListSource.next([...this.toDoListSource.getValue(), generatedTask]);
  }
  private generateTaskId(): number {
    let id = 0;
    if (this.toDoListSource.getValue().length) {
      id = this.toDoListSource.getValue()[this.toDoListSource.getValue().length - 1].id + 1;
    }
    return id;
  }
  removeTask(id: number): void {
    this.toDoListSource.next(this.toDoListSource.getValue().filter(task => task.id !== id));
  }
}
