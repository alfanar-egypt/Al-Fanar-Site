import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { async } from 'q';

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
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  message: string;
  action: string = "X";
  ranNum = Math.floor((Math.random() * 100) + 1);
  userInput;
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z\u0621-\u064A ]*$'),
  ]);
  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9\u0660-\u0669]*$'),
  ])
  commentsFormControl = new FormControl('', [])
  matcher = new MyErrorStateMatcher();

  contactForm = new FormGroup({
    Name: this.nameFormControl, Email: this.emailFormControl, "Phone-Number": this.phoneNumberFormControl, Comments: this.commentsFormControl
  });
  submitForm() {
    if (this.ranNum == Number(this.userInput)) {
      if (this.nameFormControl.errors === null && this.emailFormControl.errors === null && this.phoneNumberFormControl.errors === null) {
        const body = new HttpParams()
          .set('form-name', 'Contact-Form')
          .append('Name', this.contactForm.value.Name)
          .append('Email', this.contactForm.value.Email)
          .append('Phone-Number', this.contactForm.value["Phone-Number"])
          .append('Comments', this.contactForm.value.Comments)
        this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(res => { });
        if (document.getElementsByTagName("html")[0].getAttribute('lang') === "ar") {
          this.message = "لقد تم ارسال الاستمارة بنجاح";
          this.openSnackBar(this.message, this.action);
        }
        else {
          this.message = "your form has been submitted successfully";
          this.openSnackBar(this.message, this.action);
        }
      } else {
        if (document.getElementsByTagName("html")[0].getAttribute('lang') === "ar") {
          this.message = "الرجاء التاكد من ملء الخانات المطلوبة بشكل صحيح";
          this.openSnackBar(this.message, this.action);
        }
        else {
          this.message = "please make sure that you have filled the required fields correctly";
          this.openSnackBar(this.message, this.action);
        }
      }
    } else {
      if (document.getElementsByTagName("html")[0].getAttribute('lang') === "ar") {
        this.message = "الرجاء ادخال الرقم الظاهر بشكل صحيح";
        this.openSnackBar(this.message, this.action);
      }
      else {
        this.message = "please enter the provided number correctly";
        this.openSnackBar(this.message, this.action);
      }
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit() {
  }

}
