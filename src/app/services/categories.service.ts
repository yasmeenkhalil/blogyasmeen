import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  URL = "http://localhost:3000/categories/";
  constructor(private http : HttpClient) {

  }

  getCategories(){
    return this.http.get(this.URL, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });

  }



  getCategory(id){
    return this.http.get(this.URL + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  createCategory(category){
    return this.http.post(this.URL , category, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  editCategory(category,id) {
    return this.http.put(`http://localhost:3000/categories/${id}`, category, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });

  }

  deleteCategory(id){
    return this.http.delete(this.URL + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

}
