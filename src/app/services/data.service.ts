import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  companies: Object[] = [
    {
      id: 1,
      companyName: "Company A",
      country: "India",
      transactions: []
    },

    {
      id: 2,
      companyName: "Company B",
      country: "India",
      transactions: []
    },
    {
      id: 3,
      companyName: "Company C",
      country: "India",
      transactions: [{
        id: 1,
        amount: 2000,
        createdAt: new Date(),
      }]
    },
    {
      id: 4,
      companyName: "Company D",
      country: "India",
      transactions: []
    },

  ];
  constructor() { }
  getTransactions(): Object[] {
    let transactions = [];
    for (let company of this.companies) {
      let transactionObj = company['transactions'].map(obj => ({ ...company, ...obj }));
      transactions = [...transactions, ...transactionObj];
    }
    return transactions;
  }
  savePayment(paymentObj) {
    let transactionId;
    let index = this.companies.findIndex(obj=>obj['id']===+(paymentObj.companyId));
    if(index>-1) {
      transactionId = this.getTransactions().length + 1;
      this.companies[index]['transactions'].push({
        createdAt:new Date(),
        id:transactionId,
        amount:paymentObj.amount
      })
    }
    return transactionId;
  }
}
