import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { UserComponent } from './user/user.component';
import { dummy_users } from './users_data';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadersComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo-app';
  users = dummy_users ;
  selecteduserid = 'u1' ;

  Onselectuser(id : string) {
    this.selecteduserid = id ;

  }


  get selecteduser () {
    // console.log(this.users.find((user) => user.id === this.selecteduserid  ))
    return this.users.find((user) => user.id === this.selecteduserid  )
  }



}
