import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomeComponent } from './todo-home.component';
import { TodoHomeRoutingModule } from './todo-home-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsTodoDialogComponent } from './details-todo-dialog/details-todo-dialog.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoListComponent,
    TodoAddComponent,
    DetailsTodoDialogComponent,
    TodoEditComponent
  ],
  imports: [
    CommonModule,
    TodoHomeRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class TodoHomeModule { }
