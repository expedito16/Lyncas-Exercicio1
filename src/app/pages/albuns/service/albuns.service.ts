import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {
  readonly userid = "9da1d883988b5cb";
  readonly userSecred = "4c9445c71f904d9b3c6f29dea1e1d9948edbf969"

  constructor(
    private http: HttpClient
  ) { }

  // had to use xhr request, because angular's POST won't send whole image
  async upload2(image:any){
    return new Promise((resolve,reject) => {

      // cut the data tags
      let img=image.substr(image.indexOf(',') + 1);
      let fd =new FormData();
      fd.append('image',img);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image', true);
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.setRequestHeader(this.userid, this.userSecred);
      xhr.send(fd);
    })
  }

    // get specify image from imgur api
    getImage(id:string):Observable <any>{
      const Header= new HttpHeaders({
        'Authorization':this.userid
      })
      return this.http.get<any>('https://api.imgur.com/3/image/'+id,{headers: Header});
    }
}
