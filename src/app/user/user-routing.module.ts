import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProceedPaymentComponent } from './proceed-payment/proceed-payment.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: "",
    component:UserComponent,
    children: [

      {
        path: "",
        component: CompaniesComponent
      },

      {
        path: "proceed-payment/:id",
        component: ProceedPaymentComponent
      },

      {
        path: "transactions",
        component: TransactionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
