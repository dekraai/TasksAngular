import { Routes } from '@angular/router';
import { TaskListComponent } from './Content/task-list/task-list.component';
import { TaskDetailsComponent } from './Content/task-details/task-details.component';

export const routes: Routes = [
    { path: '', component: TaskListComponent,},
    { path: 'TaskDetails/:id', component: TaskDetailsComponent,}
];
