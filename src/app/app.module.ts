import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { Routes } from './app.routes';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoalBarComponent } from './components/goal-bar/goal-bar.component';
import { NgxCurrencyModule } from "ngx-currency";
import { ChartComponent } from './components/chart/chart.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GoalBarComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxCurrencyModule,
    DataTablesModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
