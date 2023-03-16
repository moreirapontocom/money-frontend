import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class BondService {

    constructor(
      private http: HttpClient,
    ) { }

    getBonds = (): Observable<any[]> => {
      return this.http.get<any>(`${environment.api}/bonds`);
    }
}
