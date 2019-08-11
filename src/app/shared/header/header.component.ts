import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'THE ARMCHAIR BITCOINIST';
  subtitle = 'Bitcoin Research and Analysis Console';

  constructor() { }

  ngOnInit() {
  }

}
