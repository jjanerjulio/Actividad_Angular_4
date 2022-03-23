import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPianoProComponent } from './lista-piano-pro.component';

describe('ListaPianoProComponent', () => {
  let component: ListaPianoProComponent;
  let fixture: ComponentFixture<ListaPianoProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPianoProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPianoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
