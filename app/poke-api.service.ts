import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PokeApiService {
  public imageUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  constructor(private http: HttpClient) { }
getPokemon() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=500");
  }
}