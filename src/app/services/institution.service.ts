import { Observer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class InstitutionService {

    constructor(
      private http: HttpClient,
    ) { }

    getInstitutions = (): Observable<any[]> => {
      return this.http.get<any>(`${environment.api}/institutions`);
    }
}
