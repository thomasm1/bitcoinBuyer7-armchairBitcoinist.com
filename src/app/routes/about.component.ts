import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about">
    <h4> About</h4>
    </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
