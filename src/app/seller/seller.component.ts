import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent {
  constructor(private seller: SellerService, private route: Router) {}

  showLogin = false;
  hide = true; //for password material
  email = new FormControl('', [Validators.required, Validators.email]);

  login: FormGroup = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  });
  signinSubmit() {
    console.log(this.login.value);
  }
  resetData(x: FormGroup) {
    x.reset();
  }

  // ------------------------------------------------------
  signup: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Password: new FormControl(''),
    Email: new FormControl(''),
  });
  signupSubmit() {
    // console.log(this.signup.value)     signup is form name
    this.seller.userSignUp(this.signup.value).subscribe((res: any) => {
      if (res) {
        //due to this functionality after submit page redirect to other component
        this.route.navigate(['sellerHome']); //used routing path
      }
    });
  }

  // -------------------------------------------------------------
  openlogin() {
    this.showLogin = false;
  }

  opensignup() {
    this.showLogin = true;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Plz enter valid mail @';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
