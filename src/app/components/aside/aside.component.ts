import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customersService: CustomersServiceService) {}

  ngOnInit(): void {
    this.customersService
      .getCustomers()
      .subscribe((customersData: Customer[]) => {
        this.customers = customersData;
      });
  }

  darkMode() {
    document.body.classList.toggle('darkMode');
  }
}
