import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/games';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<[Game]> {
    return this.http.get<[Game]>(BASE_URL);
  }

  deleteGame(game: Game) {
    return this.http.delete(BASE_URL + "/" + game.id);
  }

  createGame(game: Game) {
    return this.http.post(BASE_URL, game);
  }

  updateGame(game: Game){
    return this.http.put(BASE_URL + "/" + game.id, game);
  }
}
