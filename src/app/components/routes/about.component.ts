import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about">
    <h3>Posts: https://tmm-nov.s3.amazonaws.com/data/posts/may19.json</h3> 
      <ul>
      <li>Angular CLI: 8.1.2 </li>
      <li>OS: win32 x64 </li>
      <li>Angular: 8.1.2 </li>
     </ul>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
