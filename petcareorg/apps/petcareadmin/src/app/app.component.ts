import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '@petcareorg/petcareadmin/data';

@Component({
  selector: 'petcareorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
   // this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
   const httpParams = new HttpParams();
   httpParams.set('email', '');
   const params = new HttpParams().set('email', '');

   const headers = new HttpHeaders().set('Accept', 'application/json');

   const reqObj = { params, headers };
   this.http.get<User>('/api/user', reqObj).subscribe(
     t => {
       console.log(t);
     },
     error => console.log(error)
   );
  }
  addTodo() {
  /*  this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });*/
  }
}
