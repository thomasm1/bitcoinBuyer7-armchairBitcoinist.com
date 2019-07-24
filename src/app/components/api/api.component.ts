import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  posts: Post[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //  this.posts = this.apiService.getPosts();
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(post: Post) {
    // remove in UI
    this.posts = this.posts.filter(p => p.id !== post.id);
    //remove serverside
    this.apiService.deletePost(post).subscribe();
  }

  addPost(post: Post) {
    //add serverside
    this.apiService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }

}
