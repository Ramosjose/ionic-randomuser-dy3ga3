import { Component } from '@angular/core';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PokemonsComponent;
  constructor() {

  }
}
