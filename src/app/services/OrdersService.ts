import {Injectable} from '@angular/core';
import {OrderPositions, Orders} from '../types/OrdersType';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from './env';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getOrders(): Observable<Orders[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.httpClient.get(environment.apiUrl, {headers}).pipe(
      map((data: Orders[]) => data),
      catchError((error) => throwError(error))
    );
  }

  getOrderPositions(id: number): Observable<OrderPositions[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.httpClient.get(`${environment.apiUrl}/${id}`, {headers}).pipe(
      map((data: OrderPositions[]) => data),
      catchError((error) => throwError(error))
    );
  }
}
