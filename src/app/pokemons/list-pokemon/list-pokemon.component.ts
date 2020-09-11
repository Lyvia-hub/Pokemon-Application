import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../pokemon';

import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  public title = 'Pokedex';
  public pokemons: Pokemon[];

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    // Permet d'afficher tous les pokémons
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  // Permet d'accéder au détail concernant le pokémon sélectionné (-> autre composant)
  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

