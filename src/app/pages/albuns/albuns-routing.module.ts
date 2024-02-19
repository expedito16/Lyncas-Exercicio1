import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlbunsComponent } from './lista-albuns/lista-albuns.component';
import { NovoAlbumComponent } from './novo-album/novo-album.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAlbunsComponent
  },
  {
    path: 'novo-album',
    component: NovoAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbunsRoutingModule { }
