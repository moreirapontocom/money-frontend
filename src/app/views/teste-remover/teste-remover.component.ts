import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-remover',
  templateUrl: './teste-remover.component.html',
  styleUrls: ['./teste-remover.component.scss']
})
export class TesteRemoverComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  voltar(): void {
    this.route.navigate(['/']);
  }

}
