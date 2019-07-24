import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() addPost: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const post = { 
      title: this.title,
      completed:false,
      selected:false
    }
    this.addPost.emit(post)
  }

}
