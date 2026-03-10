import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  id = input.required<number>();
  

  constructor() {

  }
}
