import { Observer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

export class GoalService {
    // constructor(private http: HttpClient) { }

    getGoals(): Observable<any[]> {
        // return this.http.get<Goal[]>(`${environment.apiUrl}/goals`);

        const goals: any[] = [
            // Este primeiro não é informado pelo usuário, mas sim calculado automaticamente
            // Com base nas informações do perfil e dos aportes mensais
            // Também falta o campo de data de término das metas
            {
              title: "Meta mensal de investimento",
              amount: 50000.00,
              description: "Novembro 2022 (20 dias restantes)",
            },
            {
              title: "Meta de curto prazo (3 anos)",
              amount: 1000000.00,
              description: "Dezembro 2025",
            },
            {
              title: "Meta de médio prazo (5 anos)",
              amount: 3000000.00,
              description: "Dezembro 2027",
            },
            {
              title: "Meta de longo prazo (15 anos)",
              amount: 10000000.00,
              description: "Dezembro 2037",
            },
        ];

        return new Observable((observer: Observer<any>) => {
            observer.next(goals);
            observer.complete();
        });
    }
}