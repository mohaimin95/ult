import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private dataService:DataService) { }
  transactions:Object[];
  ngOnInit(): void {
    this.transactions = this.dataService.getTransactions();
  }

}
