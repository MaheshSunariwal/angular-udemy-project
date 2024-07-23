import { Component, Input, Output, EventEmitter} from '@angular/core';

type tasklist = {
  id : string ;
  userId : string ;
  title : string ;
  Summary : string ;
  Duedate : string ;
}
@Component({
  selector: 'app-assigntask',
  standalone: true,
  imports: [],
  templateUrl: './assigntask.component.html',
  styleUrl: './assigntask.component.css'
})
export class AssigntaskComponent {
  @Input() tasklist !: tasklist ;
  @Output() complete = new EventEmitter<String>() ;

  oncompleteTask() {
    console.log(this.tasklist.id)
    this.complete.emit(this.tasklist.id) ;
  }

}
