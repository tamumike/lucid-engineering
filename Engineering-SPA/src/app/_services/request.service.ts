import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Request } from '../_models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getRequests(page?, itemsPerPage?, requestParams?): Observable<PaginatedResult<Request[]>> {

  const paginatedResult: PaginatedResult<Request[]> = new PaginatedResult<Request[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  if (requestParams != null) {
    params = params.append('group', requestParams.group);
    params = params.append('approved', requestParams.approved);
    params = params.append('locationOfProject', requestParams.locationOfProject);
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

submit(request: Request) {
  return this.http.post(this.baseUrl + 'requests/submit', request);
}

}
