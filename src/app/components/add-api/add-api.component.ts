import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.css']
})
export class AddApiComponent implements OnInit {

  @Output() addApi: EventEmitter<any> = new EventEmitter();
  title:string;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      apiName: '',
      title: '',
      parameters: '',
      description: '',
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

  onSubmit() {
    const api = { 
      title: this.title,
      completed:false,
      selected:false
    }
    this.addApi.emit(api)
  }

}
