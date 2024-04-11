import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from './../../core/models/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {

  @Output() onCompletedTaskAdd = new EventEmitter<number>()

  todoForm!: FormGroup;

  constructor(
    private todoService: TodoService
  ){}
  
  ngOnInit(): void {
    this.todoForm = new FormGroup ({
      title: new FormControl (null, Validators.required),
      description: new FormControl (null, Validators.required),
      priority: new FormControl (null, Validators.required),
      dueDate: new FormControl (null, Validators.required),
      status: new FormControl ('in progress')
    })
  }

  addTodo(): void {
    const task: Task = this.todoForm.value
    this.todoService.addTodoTask(task).subscribe({
      next:() => this.onCompletedTaskAdd.emit(0),
      complete:() => this.todoForm.reset(),
      error:() => alert('Something gone wrong. Try again.')
    })    
  }
}
