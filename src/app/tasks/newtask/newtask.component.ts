import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {

  @Output() canceladdtask = new EventEmitter<void> () ;
  @Output() taskdata = new EventEmitter<{
    title : string ;
    summary : string ;
    duedate : string ;
  }> () ;

  enteredtitle : string = '' ;
  enteredsummary : string = '' ;
  entereddate = '';

  oncancel() {
    this.canceladdtask.emit() ;
  }


  onsubmit() {
    this.taskdata.emit(
      {
        title : this.enteredtitle ,
        summary : this.enteredsummary ,
        duedate : this.entereddate ,
      }
    )
    console.log('mahesh')
    console.log(this.taskdata)
    this.oncancel()


  }

}
