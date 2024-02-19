import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-albuns',
  templateUrl: './lista-albuns.component.html',
  styleUrls: ['./lista-albuns.component.scss']
})
export class ListaAlbunsComponent implements OnInit {
  albunsList: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newAlbum() {
    this.router.navigate(['novo-album']);
  }
}
