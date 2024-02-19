import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlbunsComponent } from './lista-albuns.component';

describe('ListaAlbunsComponent', () => {
  let component: ListaAlbunsComponent;
  let fixture: ComponentFixture<ListaAlbunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlbunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
