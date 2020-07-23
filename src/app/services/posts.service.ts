import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {
    // this.heders.set('Country' , 'Palestine');
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  getPost(id) {
    return this.http.get(`http://localhost:3000/posts/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  createPost(post) {
    return this.http.post('http://localhost:3000/posts', post, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  editPost(post,id) {
    console.log(id ,post);
 return this.http.put(`http://localhost:3000/posts/${id}`, post, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });


  }

  deletepost(id){
      return this.http.delete(`http://localhost:3000/posts/${id}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        }),
      });
  }


}

