import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Api } from '../../models/api.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  apis: Api[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //  this.apis = this.apiService.getApis();
    this.apiService.getApis().subscribe(apis => {
      this.apis = apis;
    });
  }

  deleteApi(api: Api) {
    // remove in UI
    this.apis = this.apis.filter(p => p.id !== api.id);
    //remove serverside
    this.apiService.deleteApi(api).subscribe();
  }

  addApi(api: Api) {
    //add serverside
    this.apiService.addApi(api).subscribe(api => {
      this.apis.push(api);
    });
  }

  
//   myFunction = function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("tom-tom").innerHTML = this.responseText;
//             // console.log('stringify', JSON.stringify(this.responseText))
//             // console.log(this.responseText);
//             var rParsed = JSON.parse(this.responseText);
//             console.log('parse', rParsed.body);
//             var r = rParsed.body;
//             for (let i = 0; i < r.length; i++) {
//                 var coins = ` 
// 		  <li id="${r[i].Date}"  >  
// 		  <h6><strong>${r[i].Symbol}:&nbsp;  ${r[i].Date} </strong> </h6>   
// 		  <h6>Open: ${r[i].Open} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Low: ${r[i].Low}</h6>
// 		  <h6>Close: ${r[i].Close} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; High: ${r[i].High}</h6> 
// 	<!--  <div>Volume BTC: ${r[i].BTC}
// 		  </div>
// 		  <div>Volume USD: ${r[i].USD}
// 		  </div> -->
// 		  <hr>
// 		  </li>
// 		  `;
//                 document.getElementById('bitcoin').innerHTML += coins;
//             }

//         }
//     };
//     xhttp.open("GET", "https://jdkxd2ny04.execute-api.us-east-1.amazonaws.com/prod/thomasMiltonFunction", true);
//     xhttp.send();
// }

}
