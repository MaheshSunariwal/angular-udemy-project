import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { UserComponent } from './user/user.component';
import { dummy_users } from './users_data';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadersComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo-app';
  users = dummy_users ;

Onselectuser(id : string) {
  console.log(id)
}

}
