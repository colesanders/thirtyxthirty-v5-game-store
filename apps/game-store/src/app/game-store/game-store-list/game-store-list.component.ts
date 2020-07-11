import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-game-store-list',
  templateUrl: './game-store-list.component.html',
  styleUrls: ['./game-store-list.component.scss']
})
export class GameStoreListComponent implements OnInit {
  @Input() games: [Game];
  @Output() selected = new EventEmitter<Game>();
  @Output() deleted = new EventEmitter<Game>();
  constructor() { }

  ngOnInit(): void {
  }

}
