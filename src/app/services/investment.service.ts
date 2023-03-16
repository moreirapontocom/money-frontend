import { Observer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class InvestmentService {

    constructor(
      private http: HttpClient,
    ) { }

    getRecords = (recordType: string = 'investment'): Observable<any[]> => {
      return this.http.get<any>(`${environment.api}/investments`);
    }

    addRecord = (payload: any): Observable<any[]> => {
      return this.http.post<any>(`${environment.api}/investments`, payload);
    }
}
