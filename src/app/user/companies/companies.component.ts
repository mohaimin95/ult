import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private dataService:DataService) { }
  companies:Object[];
  ngOnInit(): void {
    this.companies = this.dataService.companies;
  }

}
