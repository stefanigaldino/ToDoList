import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //[] quando se iguala ao colchete indica-se vazio.
  public title: String = 'My Tasks';

  constructor() {
    this.todos.push( new Todo(1, 'Ir ao mercado', false));
    this.todos.push( new Todo(2, 'Passear com o cachorro', false));
    this.todos.push( new Todo(3, 'Estudo', true));
    this.todos.push( new Todo(4, 'Treino', false));
  }

  alterText() {
    this.title = 'Test';
  }


  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      //splice metodo que remove/muda atraves do indice(index).
    }
  };

  markAsDone(todo: Todo) {
    todo.done = true;
  };
  
  markAsUndone(todo: Todo) {
    todo.done = false;
  };

}
