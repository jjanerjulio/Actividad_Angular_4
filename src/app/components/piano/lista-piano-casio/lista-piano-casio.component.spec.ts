import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianoCasioComponent } from './lista-piano-casio.component';

describe('ListaPianoCasioComponent', () => {
  let component: ListaPianoCasioComponent;
  let fixture: ComponentFixture<ListaPianoCasioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianoCasioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianoCasioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
