import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CapacityOrder } from '../models/CapacityOrder';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private apiUrl = 'http://202.51.184.171:8888/api/Common/CapacityVsOrder/7';

  constructor(private http: HttpClient) { }

  getData(): Observable<CapacityOrder[]> {
    return this.http.get<CapacityOrder[]>(this.apiUrl);
  }

}
