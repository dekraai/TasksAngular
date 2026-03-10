import { Component, input } from '@angular/core';
import { Task } from '../../DTO/task';
import { TaskService } from '../../Service/task.service';
import { Router } from '@angular/router';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    TasksIOwn: Task[] = [];
    

    constructor(private taskService: TaskService,
      private router: Router
    ) {
      //this.getMyTasks();
    }

  goToTask(taskId: number) {
    
  }

  getMyTasks() {
    console.log("doe: getMyTasks")
    this.taskService.GetAllMyTasks().subscribe((response: any) => {
      console.log(response);
      this.TasksIOwn = response;

    })
  }
}
