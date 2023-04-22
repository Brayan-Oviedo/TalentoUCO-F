import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";


const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {  }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(
            catchError(error => {

              switch (error.status) {
                
                case UNAUTHORIZED:
                  this.router.navigate(['/login']);
                  break;
                case FORBIDDEN:
                  this.router.navigate(['/home']);
                  break;
                default:
                  return throwError(() => new Error(error));
              }
            })
        );
    }
}