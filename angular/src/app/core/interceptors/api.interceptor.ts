import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${apiUrl}/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(apiReq);
  }
}
