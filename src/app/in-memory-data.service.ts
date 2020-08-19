import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemons/mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // Simuler base de données et petite API
  createDb() {
    let pokemons = POKEMONS;
    return { pokemons };
  }

  constructor() { }
}
