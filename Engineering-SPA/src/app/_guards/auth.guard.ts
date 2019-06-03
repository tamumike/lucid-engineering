import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private alertify: AlertifyService, private router: Router) {}

  canActivate(): boolean {
    if (this.userService.isAuthorizedToApprove()) {
      return true;
    }

    this.alertify.error('You are unauthorized to visit this page.');
    this.router.navigate(['/home']);
    return false;
  }
}
