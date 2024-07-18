import { Component, Input, Output, EventEmitter } from '@angular/core';
import { dummy_users } from '../users_data';


// const randomindex = Math.floor(Math.random()*dummy_users.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selecteduser = dummy_users[randomindex]

  @Input() avatar !: string ;
  @Input() name !: string ;
  @Input() id !: string ;

  @Output() select = new EventEmitter<string>() ;

  get imagepath() {
    return 'assets/users-photo/' + this.avatar
  }

  onselectuser() {
    this.select.emit(this.id)
    console.log(this.name)
  }

}
