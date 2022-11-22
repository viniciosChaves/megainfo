import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaSeuPcComponent } from './escolha-seu-pc.component';

describe('EscolhaSeuPcComponent', () => {
  let component: EscolhaSeuPcComponent;
  let fixture: ComponentFixture<EscolhaSeuPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaSeuPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaSeuPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
