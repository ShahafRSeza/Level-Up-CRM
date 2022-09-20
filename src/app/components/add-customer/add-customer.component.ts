import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    avater: '',
    notes: '',
    date: new Date().toLocaleDateString('en-us'),
    address: '',
  };

  maleAvatars: string[] = [
    '/assets/img/MaleUser1.svg',
    '/assets/img/MaleUser2.svg',
    '/assets/img/MaleUser3.svg',
    '/assets/img/MaleUser4.svg',
    '/assets/img/MaleUser5.svg',
  ];

  femaleAvatars: string[] = [
    '/assets/img/FemaleUser1.svg',
    '/assets/img/FemaleUser2.svg',
    '/assets/img/FemaleUser3.svg',
    '/assets/img/FemaleUser4.svg',
    '/assets/img/FemaleUser5.svg',
  ];
  address: any;

  constructor(
    private customerService: CustomersServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submiAddCustomerForm(addCustomerForm: NgForm) {
    this.customerService
      .addCustomer(this.customer)
      .then(() => {
        this.showSuccess('', 'New Customer Added');
        this.router.navigateByUrl('/Home/Customers');
      })
      .catch((err) => {
        console.log(err);
        this.showError('Something went wrong...', 'Oops!');
      });
  }

  resetForm(): void {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      avater: '',
      notes: '',
      date: '',
      address: '',
    };
  }

  navigateTo(href: string): void {
    this.router.navigateByUrl(href);
  }

  showSuccess(text: string, title: string) {
    this.toastr.success(text, title, {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showError(text: string, title: string) {
    this.toastr.error(text, title, {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    });
  }
}
