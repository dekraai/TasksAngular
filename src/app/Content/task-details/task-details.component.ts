import { Component, inject, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../DTO/task';
import { TaskService } from '../../Service/task.service';
import { TaskLog } from '../../DTO/task-log';
import { TasklogService } from '../../Service/tasklog.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  readonly taskId: string | null;
  private route = inject(ActivatedRoute);
  task: Task = new Task();
  tasklogs: TaskLog[] = [];

  constructor(private taskService: TaskService,
    private tasklogService: TasklogService
  ) {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.GetTask(this.taskId);
      this.GetLogs(this.taskId);
    }
  }

  GetTask(id: string) {
    this.taskService.GetOneTask(id).subscribe((response: any) => {
      console.log("En nu komt de response: ", response)
      console.log(response);
      this.task = response;
    })
  }

  GetLogs(id: string) {
      this.tasklogService.GetAllTasklogsOfTask(id).subscribe((response: any) => {
        console.log(response);
        this.tasklogs = response;
      })
  }
}
