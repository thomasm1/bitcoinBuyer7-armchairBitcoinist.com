import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <button >
  <tm-sidebar-toggle></tm-sidebar-toggle>
  </button>
    <div class="about" > 
    <tm-sidebar></tm-sidebar>
    </div> 
    <button><a target="_blank" href="mailto:thomas.maestas@ourdailytech.net" title="Email: thomas.maestas@ourdailytech.net">
    Email Contact</a> </button>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  subtitle = 'About';
  constructor() { }

  ngOnInit() {
  }

}
