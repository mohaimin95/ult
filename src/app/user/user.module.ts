import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProceedPaymentComponent } from './proceed-payment/proceed-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [TransactionsComponent, CompaniesComponent, ProceedPaymentComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
