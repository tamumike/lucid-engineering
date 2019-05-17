import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RequestService } from '../_services/request.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RequestApproveResolver implements Resolve<Request>
{

  constructor(private requestService: RequestService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.requestService.getRequest(route.params['esr'])
      .pipe(
        catchError(error => {
          console.log(error);
          this.router.navigate(['/requests']);
          return of(null);
        })
      );
  }

}
