import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteRemoverComponent } from './teste-remover.component';

describe('TesteRemoverComponent', () => {
  let component: TesteRemoverComponent;
  let fixture: ComponentFixture<TesteRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
