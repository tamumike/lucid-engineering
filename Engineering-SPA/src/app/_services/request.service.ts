import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getRequests(): Observable<Request[]> {
  return this.http.get<Request[]>(this.baseUrl + 'requests');
}

getRequest(esr: string): Observable<Request> {
  return this.http.get<Request>(this.baseUrl + 'requests/' + esr);
}

submit(request: Request) {
  return this.http.post(this.baseUrl + 'requests/submit', request);
}

}
