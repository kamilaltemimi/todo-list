import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent {

  tabIndex: number = 0

  constructor(){}

  changeTab(event: MatTabChangeEvent): void{
    this.tabIndex = event.index
  }

  setTheTab(index: number): void{
    this.tabIndex = index
  }

}
