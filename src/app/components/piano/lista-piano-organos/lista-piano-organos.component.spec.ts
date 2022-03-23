import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianoOrganosComponent } from './lista-piano-organos.component';

describe('ListaPianoOrganosComponent', () => {
  let component: ListaPianoOrganosComponent;
  let fixture: ComponentFixture<ListaPianoOrganosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianoOrganosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianoOrganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
