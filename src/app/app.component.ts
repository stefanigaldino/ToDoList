import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //[] quando se iguala ao colchete indica-se vazio.
  public title: String = 'My Tasks';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([ //compose é quando se tem mais de uma validação.
        Validators.minLength(2),
        Validators.maxLength(60),
        Validators.required //require é obrigatorio.
      ])
    ]
    });
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  clear(){
    this.form.reset();

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
