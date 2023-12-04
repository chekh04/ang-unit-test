export interface Task {
  description: string,
  id: number
}

export type TaskWithoutId = Omit<Task, 'id'>
