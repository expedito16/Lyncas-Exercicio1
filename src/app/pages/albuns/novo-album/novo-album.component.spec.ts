import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAlbumComponent } from './novo-album.component';

describe('NovoAlbumComponent', () => {
  let component: NovoAlbumComponent;
  let fixture: ComponentFixture<NovoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
