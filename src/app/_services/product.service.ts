import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers : new HttpHeaders({
    Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).token
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl="https://localhost:44366/api/";
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.baseUrl+'categories',httpOptions);
  }

  getProducts(){
    return this.http.get(this.baseUrl+'products',httpOptions);
  }

  getProductById(id){
    return this.http.get(this.baseUrl+'products/'+id,httpOptions);
  }

  deleteProduct(id){
    return this.http.delete(this.baseUrl+'products/'+id, httpOptions);
  }

  updateProduct(id){
    return this.http.put(this.baseUrl+'products/'+id, httpOptions);
  }
  
  createProduct(product){
    
    let productHttpOptions = {
      headers : new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).token,
         'Accept': 'application/json',
         'Content-Disposition': 'multipart/form-data'
      })
     
    }
    return this.http.post(this.baseUrl+'products',product,productHttpOptions);
  }

  uploadImage(image){
   
      let imageHttpOptions = {
        headers : new HttpHeaders({
          Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).token,
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data'
        })
       
      }
 

    // let headers = new Headers();
    // /** In Angular 5, including the header Content-Type can invalidate your request */
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization',"Bearer " + JSON.parse(localStorage.getItem('user')).token)
    const formData = new FormData();
    
    formData.append('productImage', image)
    return this.http.post(this.baseUrl+'upload-file',formData,imageHttpOptions);
  }
}
