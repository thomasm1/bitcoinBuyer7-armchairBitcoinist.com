import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Api } from 'src/app/models/api.model'; 
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.css']
})
export class ApiItemComponent implements OnInit {
  @Input() api: Api;
  @Output() deleteApi: EventEmitter<Api> = new EventEmitter();

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  setClasses() {
    let classes= {
      api:true,
      'is-selected': this.api.selected, 
      'is-completed': this.api.completed
    } 
    return classes
  }

  onToggle(api) {
    // Toggle in UI
    api.selected = !api.selected;
    api.completed = !api.completed;

    // Toggle on server-side
    this.apiService.toggleSelected(api).subscribe(api => console.log(api));
  }

  onDelete(api) {
   this.deleteApi.emit(api);
  }
}
