import { Component, inject, Inject } from '@angular/core';
import { ɵInternalFormsSharedModule, FormGroup, FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NewTask } from '../../DTO/new-task';
import { NewTaskService } from '../../Service/new-task.service';
import { Task } from '../../DTO/task';
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

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  readonly dialogRef = inject(MatDialogRef<NewTaskComponent>);
  readonly data = Inject(MAT_DIALOG_DATA);

  newTaskForm: FormGroup;
  taskName = FormControl;
  constructor(private fb: FormBuilder, private newTaskService: NewTaskService) {
    this.newTaskForm = this.fb.group({
      taskName: new FormControl<string>(''),
      taskDetails: new FormControl<string>(''),
      deadline: this.fb.control<Date>
    });
  }

  public onSubmit() {
    let newTask = new NewTask(
      this.newTaskForm.get('taskName')?.value,
      this.newTaskForm.get('taskDetails')?.value,
      this.newTaskForm.get('deadline')?.value
    );

    this.newTaskService.addNewTask(newTask).subscribe((task: Task) => {
      if (task.name === newTask.taskName) {
        console.log("Joepie, hij is opgeslagen!");
        this.newTaskForm.reset();
        this.dialogRef.close();
      }
      else {
        console.log("eits ging er niet goed: " + task);
      }
    })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
