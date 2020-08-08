import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  public pokemons: Pokemon[];
  public title = 'Liste des Pokémons';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;  // data initialisation
  }
  selectPokemon(pokemon: Pokemon) {
    // alert(`Vous avez cliqué sur ${pokemon.name}`);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

