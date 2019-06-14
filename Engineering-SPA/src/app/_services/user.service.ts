import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  username: any;
  members = this.getGroupMembers();

constructor(private http: HttpClient) { }

getUsername() {
  return this.http.get(this.baseUrl + 'user/username');
}

getGroupMembers() {
  return this.http.get(this.baseUrl + 'user/groupmembers');
}

isAuthorizedToCreate() {
  return this.http.get(this.baseUrl + 'user/authorizedtocreate');
}

isAuthorizedToApprove() {
  return this.http.get(this.baseUrl + 'user/authorizedtoapprove');
}

}
