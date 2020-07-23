import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getTags(){
    return this.http.get("http://localhost:3000/tags", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  getTag(id){
    return this.http.get("http://localhost:3000/tags/" + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  createTag(tag) {
    return this.http.post('http://localhost:3000/tags', tag, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  editTag(tag,id) {
    return this.http.put('http://localhost:3000/tags/' +id, tag, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  deleteTag(id){
    return this.http.delete('http://localhost:3000/tags/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
}
