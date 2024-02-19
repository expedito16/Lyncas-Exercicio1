import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlbunsService } from '../service/albuns.service';

@Component({
  selector: 'app-novo-album',
  templateUrl: './novo-album.component.html',
  styleUrls: ['./novo-album.component.scss']
})
export class NovoAlbumComponent implements OnInit {
  @Output() galleryupdate = new EventEmitter();

  files: File[] = [];
  albumForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private albunsService: AlbunsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.albumForm = this.formBuilder.group({
      albumName: ['', Validators.required]
    })
  }

  // add images
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  cancel() {
    this.router.navigate(['']);
  }

  save() {
    if (this.files.length>0){
      for (let i=0;i<this.files.length;i++){

        // first parse image to base64
        this.readFile(this.files[i]).then(fileContents => {
          this.albunsService.upload2(fileContents).then((ret:any)=>{

            //after getting response from service, call gallery component to update view
            ret = JSON.parse(ret.target.response);
            this.galleryupdate.emit(ret.data.id);
          })
        })
      }
    }
  }

  //  Parse image file to base64
  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      // reader.onload = e => {
      //   return resolve((e.target as FileReader).result);
      // };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
    });
  }

}
