import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianoSintetizadoresComponent } from './lista-piano-sintetizadores.component';

describe('ListaPianoSintetizadoresComponent', () => {
  let component: ListaPianoSintetizadoresComponent;
  let fixture: ComponentFixture<ListaPianoSintetizadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianoSintetizadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianoSintetizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
