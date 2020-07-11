import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoreInfoComponent } from './game-store-info.component';

describe('GameStoreInfoComponent', () => {
  let component: GameStoreInfoComponent;
  let fixture: ComponentFixture<GameStoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
