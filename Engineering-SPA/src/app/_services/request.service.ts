import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Request } from '../_models/request';
import { AlertifyService } from './alertify.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private alertify: AlertifyService) { }

getRequests(page?, itemsPerPage?, requestParams?): Observable<PaginatedResult<Request[]>> {

  const paginatedResult: PaginatedResult<Request[]> = new PaginatedResult<Request[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if (requestParams != null) {
    params = params.append('department', requestParams.department);
    params = params.append('approved', requestParams.approved);
    params = params.append('locationOfProject', requestParams.locationOfProject);
    params = params.append('engineerAssigned', requestParams.engineerAssigned);
    params = params.append('esr', requestParams.esr);
    params = params.append('orderBy', requestParams.orderBy);
  }

  return this.http.get<Request[]>(this.baseUrl + 'requests', { observe: 'response', params })
  .pipe(
    map(response => {
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') != null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

getRequest(esr: string): Observable<Request> {
  return this.http.get<Request>(this.baseUrl + 'requests/' + esr);
}

getAssignedRequests(page?, itemsPerPage?, requestParams?): Observable<PaginatedResult<Request[]>> {
  const paginatedResult: PaginatedResult<Request[]> = new PaginatedResult<Request[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if (requestParams != null) {
    params = params.append('user', requestParams.user);
  }

  return this.http.get<Request[]>(this.baseUrl + 'requests/assigned', { observe: 'response', params} )
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
}

submit(request: Request) {
  return this.http.post(this.baseUrl + 'requests/submit', request);
}

approve(request: Request) {
  return this.http.put(this.baseUrl + 'requests/' + request.esr, request);
}

changeStatus(request: Request) {
  return this.http.put(this.baseUrl + 'requests/status/' + request.esr, request);
}

updateRequest(request: Request) {
  return this.http.put(this.baseUrl + 'requests/update/' + request.esr, request);
}

completeRequest(request: Request) {
  return this.http.put(this.baseUrl + 'requests/complete/' + request.esr, request);
}

cancelRequest(request: Request) {
  return this.http.put(this.baseUrl + 'requests/cancel/' + request.esr, request);
}

checkForChanges(request: Request, model: Request): boolean {
  const aProps = Object.getOwnPropertyNames(request);

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];
    if (request[propName] !== model[propName]) {
      return true;
    }
  }
  return false;
}

}
