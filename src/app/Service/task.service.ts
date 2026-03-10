import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Task } from '../DTO/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  

  constructor() {
    
   }
   http = inject(HttpClient);

   GetAllMyTasks(): Observable<any> {
    let completeURL = environment.server + 'tasks/my';
    console.log(completeURL);
    return this.http.get(completeURL);
   }
}
