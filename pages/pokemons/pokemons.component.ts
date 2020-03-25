import { Component, OnInit } from '@angular/core';
import {  PokeApiService } from '../../app/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {
  pokemons: any[] = [];
  imagen:any;
  constructor(public pokeService: PokeApiService) { }
  
  ngOnInit() {
  }
ionViewDidLoad(){
    this.imagen = this.pokeService.imageUrl;

    this.pokeService.getPokemon()
    .subscribe(
      (data) => { // Success
      console.log(this.imagen);
        this.pokemons = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}