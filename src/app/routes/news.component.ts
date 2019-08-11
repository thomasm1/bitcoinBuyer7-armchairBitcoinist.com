import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
   <div class="news">
  <h3> News</h3>
  </div>
  `,
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
