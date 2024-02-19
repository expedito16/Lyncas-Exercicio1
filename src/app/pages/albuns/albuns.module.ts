import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';

//Routing
import { AlbunsRoutingModule } from './albuns-routing.module';

//Pages
import { ListaAlbunsComponent } from './lista-albuns/lista-albuns.component';
import { NovoAlbumComponent } from './novo-album/novo-album.component';


@NgModule({
  declarations: [
    ListaAlbunsComponent,
    NovoAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ]
})
export class AlbunsModule { }
