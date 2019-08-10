import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  // postsUrl:string =  'https://tmm-nov.s3.amazonaws.com/data/posts/may19.json';
  postsLimit = '?_limit=5';

  constructor(private http: HttpClient) { } 

  // Update server-side
  toggleSelected(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, httpOptions);
  } 
  // Get server-side
    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
      // return [
      //   {
      //     id: 1,
      //     author: 'Thomas Maestas',
      //     date: 'May 8, 2019',
      //     cat3: 'Musing Blockchain',
      //     title: 'Post One',
      //     selected: false
      //   } 
      // ]
    } 
  //Delete server-side
  deletePost(post:Post):Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<Post>(url, httpOptions);
  }
  //Add server-side
  addPost(post:Post):Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

}
