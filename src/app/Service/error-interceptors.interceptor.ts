import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, NEVER, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class errorInterceptorsInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        console.log("het is een error");
        if (!!error.status) {
          console.log ("het is een error van type: ", error.status);
          return NEVER;
        }
        return throwError(error);
      }))
    }    
};
