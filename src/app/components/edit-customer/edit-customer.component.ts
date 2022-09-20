import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerId: number = 0;
  customer?: Customer;

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

  constructor(
    private customerService: CustomersServiceService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.customerId = this.actRoute.snapshot.params['id'];
    this.customerService.getCustomers().subscribe((customerData) => {
      this.customers = customerData;
    });
  }

  updateCustomer(customer: Customer): void {
    this.customerService
      .editCustomer(customer)
      .then(() => {
        this.router.navigateByUrl('/Home/Customers');
        this.showSuccess('', 'Customer Updated Successfully');
      })
      .catch((err) => {
        console.log(err);
        this.showError('Something went wrong...', 'Oops!');
      });
  }

  cancel() {
    this.router.navigateByUrl('/Home/Customers');
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
