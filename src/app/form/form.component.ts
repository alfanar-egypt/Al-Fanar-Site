import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient) { }
  emailFormControl = new FormControl('', [   
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z\u0621-\u064A ]*$'),
  ]);
  phoneNumberFormControl = new FormControl ('', [
    Validators.required,
    Validators.pattern('[0-9\u0660-\u0669]*$'),
  ])
  commentsFormControl = new FormControl ('',[])
  matcher = new MyErrorStateMatcher();

  contactForm = new FormGroup({
    Name: this.nameFormControl, Email:this.emailFormControl, "Phone-Number": this.phoneNumberFormControl, Comments: this.commentsFormControl
  });
  submitForm() {
  const body = new HttpParams()
  .set('form-name', 'Contact-Form')
    .append('Name', this.contactForm.value.Name)
    .append('Email', this.contactForm.value.Email)
    .append('Phone-Number', this.contactForm.value["Phone-Number"])
    .append('Comments', this.contactForm.value.Comments)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(    res => {}
    );}

 

  ngOnInit() {
  }

}
