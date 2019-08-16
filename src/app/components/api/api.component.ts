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

}
