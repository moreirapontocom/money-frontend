import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

@Injectable()
export class GoalService {

    constructor(private http: HttpClient) { }

    getGoals(): Observable<any[]> {
      return this.http.get<any[]>(`${environment.api}/goals`);
    }

    updateGoal(goal: any): Observable<any> {
      return this.http.put(`${environment.api}/goals/${goal.id}`, goal);
    }
}