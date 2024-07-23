import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AssigntaskComponent } from "./assigntask/assigntask.component";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AssigntaskComponent,NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() userid !: string ;
  @Input() name !: string ;



  tasks = [
    {
      id : 't1' ,
      userId : 'u3' ,
      title : 'Master Angular' ,
      Summary : 'Learn Angular' ,
      Duedate : '2024-05-31'
    },
    {
      id : 't1' ,
      userId : 'u1' ,
      title : 'Master Angular complete' ,
      Summary : 'learn basics' ,
      Duedate : '2024-05-31'
    },
    {
      id : 't2' ,
      userId : 'u4' ,
      title : 'Master Angular half' ,
      Summary : 'Learn prototype' ,
      Duedate : '2024-05-31'
    },
    {
      id : 't3' ,
      userId : 'u4' ,
      title : 'Master Angular medium' ,
      Summary : 'study js' ,
      Duedate : '2024-05-31'
    },

  ]

  get selectedusertask () {
    let a = this.tasks.filter((task) => task.userId === this.userid)
    console.log(a)
    return a



  }

  completetask(id : String) {
    console.log(id)
    this.tasks = this.tasks.filter((task) => task.id !== id )

  }

}
