import { Component,OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
constructor (private seller:SellerService){}


  ngOnInit(): void{
   this.seller.reloadSeller()
  }
}
