import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  multi: any[] = [
    {
      name: "Tesouro Direto IPCA 2024",
      series: [
        { name: "Janeiro", value: 0 },
        { name: "Fevereiro", value: 13000 },
        { name: "Março", value: 33000 },
        { name: "Abril", value: 35000 },
        { name: "Maio", value: 42500 },
        { name: "Junho", value: 45900 },
        { name: "Julho", value: 57900 },
        { name: "Agosto", value: 68000 },
        { name: "Setembro", value: 88000 },
        { name: "Outubro", value: 97000 },
        { name: "Novembro", value: 120000 },
        { name: "Dezembro", value: 210000 },
      ]
    },
    {
      name: "BCAAI11",
      series: [
        { name: "Janeiro", value: 0 },
        { name: "Fevereiro", value: 1000 },
        { name: "Março", value: 3000 },
        { name: "Abril", value: 3000 },
        { name: "Maio", value: 5000 },
        { name: "Junho", value: 5900 },
        { name: "Julho", value: 7900 },
        { name: "Agosto", value: 8000 },
        { name: "Setembro", value: 8000 },
        { name: "Outubro", value: 7000 },
        { name: "Novembro", value: 20000 },
        { name: "Dezembro", value: 80000 },
      ]
    },
    {
      name: "Conta Digital",
      series: [
        { name: "Janeiro", value: 10000 },
        { name: "Fevereiro", value: 10000 },
        { name: "Março", value: 300 },
        { name: "Abril", value: 6000 },
        { name: "Maio", value: 9000 },
        { name: "Junho", value: 7900 },
        { name: "Julho", value: 9900 },
        { name: "Agosto", value: 10000 },
        { name: "Setembro", value: 12000 },
        { name: "Outubro", value: 7000 },
        { name: "Novembro", value: 80000 },
        { name: "Dezembro", value: 120000 },
      ]
    },
  ];

  funds = [
    {
      name: 'Tesouro Selic 2027 2% + IPCA',
      amount: 300000.00,
      naoSeiMudar: 2.5, // % (R$ 1.788,00)
      type: 'Tesouro Direto',
      fixacaoMudar: 'Renda Fixa',
      institution: 'NuInvest',
      updatedAt: (new Date()),
    },
    {
      name: 'BCAAI11',
      amount: 192345.00,
      naoSeiMudar: 2.5, // (R$ 1.788,00)
      type: 'FII',
      fixacaoMudar: 'Renda Variável',
      institution: 'NuInvest',
      updatedAt: (new Date()),
    },
    {
      name: 'Conta Digital',
      amount: 7135.00,
      naoSeiMudar: '-',
      type: '-',
      fixacaoMudar: '-',
      institution: 'Wise',
      updatedAt: (new Date()),
    },
  ];

  investments = [
    {
      fund: 'Tesouro Selic 2027 2% + IPCA',
      amount: 300000.00,
      createdAt: (new Date()),
    },
    {
      fund: 'BCAAI11',
      amount: 191345.00,
      createdAt: (new Date()),
    },
    {
      fund: 'Conta Digital',
      amount: 6135.00,
      createdAt: (new Date()),
    },
  ];

  sumAmountInvestments(): any {
    return this.investments.reduce((acc, investment) => acc + investment.amount, 0);
  }

  currentPatrimonyAmount: number = 850000.00;

  calculatePercentage(currentAmount: number, goalAmount: number): number {
    return Math.round((currentAmount / goalAmount) * 100);
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
