import { Component, ChangeDetectionStrategy, inject} from '@angular/core';
import { Task } from '../../DTO/task';
import { TaskService } from '../../Service/task.service';
import { Router, RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NewTask } from '../../DTO/new-task';
import { NewTaskComponent } from '../new-task/new-task.component';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  readonly dialog = inject(MatDialog);
  TasksIOwn: Task[] = [];
  date = new Date;
  newTask =  new NewTask("", "" , this.date);    

  constructor(private taskService: TaskService,
    private router: Router
  ) {
    this.getMyTasks();
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

openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: {name: this.newTask.taskName, animal: this.newTask.details, deadline: this.newTask.deadLine},
    });

    dialogRef.afterClosed().subscribe((result: NewTask | undefined) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.newTask = result;
      }
    });
  }

  toNewTask() {
    
  }
}

