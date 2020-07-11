import { Component, OnInit } from '@angular/core';
import { Game } from '@thirty/api-interfaces';
import { GameStoreService, SnackBarService } from '@thirty/core-data';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'thirty-game-store',
  templateUrl: './game-store.component.html',
  styleUrls: ['./game-store.component.scss']
})
export class GameStoreComponent implements OnInit {
  title = 'Game Store';
  selectedGame: Game;
  gameForm: FormGroup
  game$: Observable<Game[]>;

  constructor(private gamesService: GameStoreService, private formBuilder: FormBuilder, public snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.refresh();
  }

  deleteGame(game:Game) {
    this.gamesService.deleteGame(game)
    .subscribe( m => {
      this.refresh();
    });
  }

  saveGame() {
    const game = this.gameForm.value;

    this.snackBarService.openSnackBar("Game Saved!", "Okay", 2000)

    if(game.id !== null){
      this.gamesService.updateGame(game)
      .subscribe( m => {
        this.refresh();
      });
    } else {
      this.gamesService.createGame(game)
      .subscribe( m => {
        this.refresh();
      });
    }
  }

  refresh(){
    this.loadGames();
    this.resetForm();
  }

  resetForm(){
    this.gameForm = this.formBuilder.group({
      id: [],

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      rating: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
    })

  }

  selectGame(game: Game) {
    this.gameForm = this.formBuilder.group({
      id: [game.id],
      name: new FormControl(game.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl(game.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      rating: new FormControl(game.rating, [
        Validators.required,
      ]),
      price: new FormControl(game.price, [
        Validators.required,
      ]),
    })
  }

  loadGames(): void{
    this.game$ = this.gamesService.getGames();
  }

}
