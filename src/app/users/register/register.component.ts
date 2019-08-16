import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore  } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  // form-state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.regForm = this.fb.group({
      name: ['', [
         Validators.required 
      ]],
      password: ['', [
        // Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      email: ['', [
        // Validators.required,
        Validators.email,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$') 
      ]],
      age: [null, [
        // Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(99),
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]],
      userGroup: '',
      cellPhone: phone,
      workPhone: phone,
      phones: this.fb.array([])
    })
    this.regForm.valueChanges.subscribe(console.log)
  }

  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  get age() {
    return this.regForm.get('age');
  }

  get agree() {
    return this.regForm.get('agree');
  }
  get phoneForms() {
    return this.regForm.get('phones') as FormArray
  }

  addPhone() {
    const aphone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })
    this.phoneForms.push(aphone)
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.regForm.value;

    try {
      await this.afs.collection('registrants').add(formValue);
      this.success = true;
    } catch (err) {
      console.error(err)
    }
    this.loading = false;
  }

}
