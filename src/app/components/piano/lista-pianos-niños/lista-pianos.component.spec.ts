import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianosComponent } from './lista-pianos.component';

describe('ListaPianosComponent', () => {
  let component: ListaPianosComponent;
  let fixture: ComponentFixture<ListaPianosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
