import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpInterceptorFn, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
  console.log("Dit is het token: " + token);
  if (token) {
    const cloned = req.clone({ setHeaders: { Authorization: 'Bearer ${token}', }, });
    return next(cloned);
  }
  return next(req);
  
};

export const appConfig: ApplicationConfig = {
  providers: [    
    provideRouter(routes, 
    withComponentInputBinding()),
    provideHttpClient(withFetch(),
  withInterceptors([authInterceptor]))
    ]
};
