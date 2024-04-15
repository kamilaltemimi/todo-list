import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/core/models/task';
import { TodoService } from 'src/app/core/services/todo.service';
import { DetailsTodoDialogComponent } from '../details-todo-dialog/details-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList!: Task[]
  filteredList!: Task[]
  sortValue = ''

  constructor(
    private todoService: TodoService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.todoService.getTodoTasks().subscribe(data => {
      this.todoList = data
      this.filteredList = data
    })
  }

  filterList(filterSearch: Event): void{ 
    let searchTerm = (filterSearch.target as HTMLInputElement).value
    searchTerm = searchTerm.toLowerCase()
    this.filteredList = this.todoList.filter(data => data.title.toLowerCase().includes(searchTerm))
  }

  sortByPriority(sortSearch: string): void {
    let selectedOption = sortSearch
    if(selectedOption === 'LowHigh') {
      this.filteredList.sort((a, b) => a.priority - b.priority)
    } else {
      this.filteredList.sort((a, b) => b.priority - a.priority)
    }
  }

  deleteTask(id: string): void{
    this.todoService.deleteTask(id).subscribe(() => this.todoService.getTodoTasks()
    .subscribe(
      data => {
      this.todoList = data 
      this.filteredList = data
    })
    )
  }

  displayTaskDetails(enterAnimationDuration: string, exitAnimationDuration: string, task: Task): void {
    this.dialog.open(DetailsTodoDialogComponent, {
      width: '700px',
      height: '480px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: task
    });
  }
}


