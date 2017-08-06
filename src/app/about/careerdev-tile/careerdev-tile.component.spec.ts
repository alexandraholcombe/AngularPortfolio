import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerdevTileComponent } from './careerdev-tile.component';

describe('CareerdevTileComponent', () => {
  let component: CareerdevTileComponent;
  let fixture: ComponentFixture<CareerdevTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerdevTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerdevTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
