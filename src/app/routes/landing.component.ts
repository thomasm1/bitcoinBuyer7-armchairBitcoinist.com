import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
  <div class="landing">  
  <h2>
  Welcome to your Armchair Bitcoining Console
 </h2>
 </div>
  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
