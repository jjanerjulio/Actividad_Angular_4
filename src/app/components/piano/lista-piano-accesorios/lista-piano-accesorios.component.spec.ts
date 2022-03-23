import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianoAccesoriosComponent } from './lista-piano-accesorios.component';

describe('ListaPianoAccesoriosComponent', () => {
  let component: ListaPianoAccesoriosComponent;
  let fixture: ComponentFixture<ListaPianoAccesoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianoAccesoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianoAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
