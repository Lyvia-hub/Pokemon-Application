import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  // Liste de tous les Pokémons
  pokemons: Pokemon[] = null;

  // Pokémon à afficher à l'utilisateur
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS; // récupérer tous les pokémons

    let id = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  // Fonction retour à la liste des cartes des pokemons
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
