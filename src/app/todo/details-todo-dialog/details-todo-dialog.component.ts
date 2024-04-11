import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './details-todo-dialog.component.html',
  styleUrls: ['./details-todo-dialog.component.scss']
})
export class DetailsTodoDialogComponent {


  constructor(
    @Inject (MAT_DIALOG_DATA) public data: Task,
    private router: Router
    ) {}

  editTask(id?: string): void {
    this.router.navigate([`edit/${id}`])
  }
}
