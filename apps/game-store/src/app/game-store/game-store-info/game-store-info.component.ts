import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '@thirty/api-interfaces';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-game-store-info',
  templateUrl: './game-store-info.component.html',
  styleUrls: ['./game-store-info.component.scss']
})
export class GameStoreInfoComponent implements OnInit {
  @Input() gameForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
}
