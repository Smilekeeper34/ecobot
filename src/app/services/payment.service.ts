import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  postPayment(data: any): Observable<any> {
    return this.http.post(
      'http://143.198.123.9:2060/project-openapi/transact',
      data
    );
  }
}
