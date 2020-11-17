import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

import { AuthGuard } from '../auth-guard.service';

// route definition
const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'all',
        component: ListPokemonComponent
      },
      {
        path: 'edit/:id',
        component: EditPokemonComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: DetailPokemonComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }

