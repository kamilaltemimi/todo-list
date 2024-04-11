import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Task } from 'src/app/core/models/task';
import { take } from 'rxjs/internal/operators/take';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  id!: string
  todoEditForm!: FormGroup

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.initializeForm()
    this.getTodoTaskById(this.id)
  }

  initializeForm(): void {
    this.todoEditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      id: new FormControl ('')
    });
  }
  
  getTodoTaskById(id: string): void{
    this.todoService.getTodoTaskById(id).pipe(take(1), map((data: Task) => {
      const task: Task = {...data, status: 'in progress'}
      return task
    })).subscribe((data: Task) => {
      this.todoEditForm.patchValue({
        title: data.title,
        description: data.description,
        priority: data.priority,
        dueDate: data.dueDate,
        status: data.status,
        id: data.id
      }) 
    })
  }

  editTask(): void{
    const updatedTask: Task = this.todoEditForm.value
    this.todoService.editTask(this.id, updatedTask).subscribe(() => this.navigateToTheList())
  }

  navigateToTheList(): void {
    this.router.navigate([''])
  }
}
