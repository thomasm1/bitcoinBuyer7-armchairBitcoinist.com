import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  postsUrl:string =  'https://tmm-nov.s3.amazonaws.com/data/posts/may19.json';
  postsLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
    // return [
    //   {
    //     id: 1,
    //     author: 'Thomas Maestas',
    //     date: 'May 8, 2019',
    //     cat3: 'Musing Blockchain',
    //     title: 'Post One',
    //     selected: false
    //   },
    //   {
    //     id: 2,
    //     author: 'Thomas Maestas',
    //     date: 'May 8, 2019',
    //     cat3: 'A.I.Now.',
    //     title: 'Post Two',
    //     selected: true
    //   },
    //   {
    //     id: 3,
    //     author: 'Thomas Maestas',
    //     date: 'May10, 2019',
    //     cat3: 'Web Dev Affairs',
    //     title: 'Post Three',
    //     selected: false
    //   }
    // ]
  }
}
