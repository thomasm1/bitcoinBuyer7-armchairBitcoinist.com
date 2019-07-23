import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post'; 

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css']
})
export class ApiItemComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
  setClasses() {
    let classes= {
      post:true,
      'is-selected': this.post.selected
    } 
    return classes
  }

  onToggle(post) {
    post.selected = !post.selected;
  }

  onDelete(post) {
    console.log('delete');
  }
}
