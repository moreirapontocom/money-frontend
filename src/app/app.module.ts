import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt);

// NgRx
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

import { AppComponent } from './app.component';
import { Routes } from './app.routes';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoalBarComponent } from './components/goal-bar/goal-bar.component';
import { NgxCurrencyModule } from "ngx-currency";
import { ChartComponent } from './components/chart/chart.component';
import { GoalService } from './services/goals.service';
import { DataTablesModule } from 'angular-datatables';
import { GoalsComponent } from './views/goals/goals.component';
import { HelperService } from './services/helpers.service';
import { InvestmentService } from './services/investment.service';
import { TesteRemoverComponent } from './views/teste-remover/teste-remover.component';
import { InstitutionService } from './services/institution.service';
import { BondService } from './services/bond.service';
import { StateService } from './services/state.service';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GoalBarComponent,
    ChartComponent,
    GoalsComponent,
    TesteRemoverComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxCurrencyModule,
    DataTablesModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
  ],
  providers: [
    HelperService,
    GoalService,
    InvestmentService,
    InstitutionService,
    BondService,
    StateService,
    ProfileService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
