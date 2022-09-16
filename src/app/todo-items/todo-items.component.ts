import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODO } from '../sample-tasks';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  todo: Todo = {


    priority: 1,
    name: 'Laundry'
  }

  constructor() { }
  ngOnInit(): void {
  }

}
