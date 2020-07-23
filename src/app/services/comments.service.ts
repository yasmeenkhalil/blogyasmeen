import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getcomments() {
    return this.http.get('http://localhost:3000/comments', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  getcomment(id) {
    return this.http.get(`http://localhost:3000/comments/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  createcomment(comment) {
    return this.http.post('http://localhost:3000/comments', {comment}

    );
  }
  editcomment(comment) {
    return this.http.put(`http://localhost:3000/comments/${comment.id}`, comment)
  }
  deletcomment(id) {
    return this.http.delete(`http://localhost:3000/comments/${id}`)
  }


}
