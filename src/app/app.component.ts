import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  newTodo = ''; 
  todos = [];

  // To add list in todo Array
  addTodo(event) {
 
    let todoObj = {
      item : this.newTodo,
      complete : false
    }
    this.todos.push(todoObj);
    this.newTodo = '';
  }

  // To mark as Done
  delTodo(i){
      this.todos[i].complete = true;
      this.todos
  }
}

