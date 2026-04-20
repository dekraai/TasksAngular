import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasklogService {

  
 http = inject(HttpClient);
 
    GetAllTasklogsOfTask(taskId: string): Observable<any> {
     let completeURL = environment.server + 'tasklogs/tasks/' + taskId;
     console.log(completeURL);
     return this.http.get(completeURL);
    }
  }
