import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  URL = 'https://todo-list-51037-default-rtdb.firebaseio.com/todo-list.json'

  constructor(
    private http: HttpClient
    ) {}

  addTodoTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.URL, task)
  }

  getTodoTasks(): Observable<Task[]> {
    return this.http.get<{[key: string]: Task}>(this.URL).pipe(map(
      data => {
        const todoList: Task[] = []
        for (const key in data) {
          const task: Task = {...data[key], id:key}
          todoList.push(task)
        }
        return todoList
      }
    ))
  }

  getTodoTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`https://todo-list-51037-default-rtdb.firebaseio.com/todo-list/${id}.json`);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`https://todo-list-51037-default-rtdb.firebaseio.com/todo-list/${id}.json`)
  }

  editTask(selectedId: string, updatedRecipe: Task): Observable<Task> {
    return this.http.put<Task>(`https://todo-list-51037-default-rtdb.firebaseio.com/todo-list/${selectedId}.json`, updatedRecipe)
  }

}
