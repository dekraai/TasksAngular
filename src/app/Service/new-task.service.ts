import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTask } from '../DTO/new-task';
import { Observable } from 'rxjs';
import { Task } from '../DTO/task';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  constructor(private httpClient: HttpClient) {

   }

   addNewTask(newTask:NewTask): Observable<Task> {
    return this.httpClient.post<Task>(environment.server + "tasks/create", newTask);
   }
}
