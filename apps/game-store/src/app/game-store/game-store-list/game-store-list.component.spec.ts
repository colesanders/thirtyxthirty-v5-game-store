import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStoreListComponent } from './game-store-list.component';

describe('GameStoreListComponent', () => {
  let component: GameStoreListComponent;
  let fixture: ComponentFixture<GameStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
