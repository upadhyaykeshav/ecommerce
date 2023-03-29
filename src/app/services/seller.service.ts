import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { signup } from '../dataType';
import {Router} from '@angular/router'
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }


  // userSignUp(data:signup)
  // {
  //   return this.http.post('http://localhost:3000/seller',data)
  // }

  userSignUp(data:signup)
  {
     this.http.post('http://localhost:3000/seller',
     data,
     {observe:'response'}).subscribe((res)=>{
      console.log(res)
      if(res){
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('seller',JSON.stringify(res.body))
        this.router.navigate(['sellerHome'])
      }
     })
  }
  reloadSeller()
  {
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['sellerHome'])
    }
  }
}
