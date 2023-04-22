import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) {  }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.cookieService.get('token');

        if (this.cookieService.check('token')) {

            const authReq = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
      
            return next.handle(authReq);
        }

        return next.handle(req);
    }
}

export const Interceptor = [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }];