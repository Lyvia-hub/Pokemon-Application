import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderPokemonComponent } from './loader-pokemon.component';

describe('LoaderPokemonComponent', () => {
  let component: LoaderPokemonComponent;
  let fixture: ComponentFixture<LoaderPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
