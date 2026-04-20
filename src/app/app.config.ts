import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule, HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpInterceptorFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { catchError, Observable, tap, throwError } from 'rxjs';

const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
  console.log("Dit is het token: " + token);
  if (token) {
    const cloned = req.clone({ setHeaders: { Authorization: 'Bearer ' + token, }, });
    return next(cloned);
  }
  return next(req).pipe(    
    catchError((err:HttpErrorResponse) => {
      if (err.status === 403) {
        console.log("Het is een 403 error bij geen token")
      }
      else if (err.status === 401) {
        console.log("het is een 401 error")
      }
      else {console.log("in de catcherror: Doe hier iets!");
      }
      return throwError(err)
    }    
  ));
  
};

export const appConfig: ApplicationConfig = {
  providers: [   
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])), 
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(),
    ]
};