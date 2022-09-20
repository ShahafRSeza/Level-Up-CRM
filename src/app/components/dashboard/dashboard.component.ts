import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/interfaces/Contacts';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customers: Customer[] = [];
  contacts: any = [
    { name: 'Franco Mccray', position: 'Information Technology Manager' },
    { name: 'Beck Webb', position: 'UX/UI Designer' },
    { name: 'Francis Mckay', position: 'Software Development' },
  ];

  constructor(
    private customersService: CustomersServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customersService
      .getCustomers()
      .subscribe((customersData: Customer[]) => {
        this.customers = customersData;
      });
  }

  navigateTo(href: string): void {
    this.router.navigateByUrl(href);
  }
}
