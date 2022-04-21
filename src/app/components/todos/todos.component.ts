import { Component, OnInit } from '@angular/core';
import {todos} from './../../models/todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }
  todos:todos[] | undefined;

  ngOnInit(): void {
    this.todos = [
      {
         content: 'first todo',
         completed:false
      },
      {
        content:'Second todo',
        completed:true
      }
    ]
  }

}
