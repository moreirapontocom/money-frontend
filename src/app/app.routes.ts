import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { Routes as Routes_1 } from "@angular/router";
import { TesteRemoverComponent } from "./views/teste-remover/teste-remover.component";

export const Routes: Routes_1 = [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'teste', component: TesteRemoverComponent, pathMatch: 'full' },
];