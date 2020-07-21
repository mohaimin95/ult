import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proceed-payment',
  templateUrl: './proceed-payment.component.html',
  styleUrls: ['./proceed-payment.component.css']
})
export class ProceedPaymentComponent implements OnInit {
  companyId:String;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService,private router:Router) { }
  transactionForm:FormGroup;
  ngOnInit(): void {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.transactionForm = new FormGroup({
      companyId:new FormControl(this.companyId),
      amount:new FormControl("",[Validators.required,Validators.min(1),Validators.max(20000 )])
    })
  }
  proceedPayment() {
    let transactionId = this.dataService.savePayment(this.transactionForm.value);
    console.log(transactionId);
    
    if(transactionId) { 
      alert("Payment is successfull. Your Tranaction ID is " +transactionId);
      this.router.navigateByUrl("/user/transactions")
    } else {
      alert("Payment failed !");
    }
    
  }
}
