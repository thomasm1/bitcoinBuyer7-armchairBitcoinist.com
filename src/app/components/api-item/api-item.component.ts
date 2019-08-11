import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model'; 
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css']
})
export class ApiItemComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  setClasses() {
    let classes= {
      post:true,
      'is-selected': this.post.selected, 
      'is-completed': this.post.completed
    } 
    return classes
  }

  onToggle(post) {
    // Toggle in UI
    post.selected = !post.selected;
    post.completed = !post.completed;

    // Toggle on server-side
    this.apiService.toggleSelected(post).subscribe(post => console.log(post));
  }

  onDelete(post) {
   this.deletePost.emit(post);
  }
}
