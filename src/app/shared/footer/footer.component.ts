import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer"> 
  <h6 class="footer-links">
      <a  routerLink="/about">About Us</a>  &nbsp; | &nbsp; 
      
      <a routerLink="/terms" title="Terms and Conditions">
          Terms and Conditions</a>  &nbsp; | &nbsp; 

      <a routerLink="/about" title="API Documentation and Trading Guide">
          API Documentation</a>
  </h6>
  <h6 class="copyright">&copy; ThomasMilton.net. &nbsp;All Rights Reserved. </h6>
</footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
