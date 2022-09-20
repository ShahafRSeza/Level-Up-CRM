import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';
import { ShowCustomerComponent } from '../show-customer/show-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  table: boolean = true;
  propName: string = '';
  propLastName: string = '';
  propPhone: string = '';
  setOrder: string = '';
  isDescOrder: boolean = false;
  amount: number = 0;
  constructor(
    private customerService: CustomersServiceService,
    private modal: NgbModal,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomers()
      .subscribe((customersData: Customer[]) => {
        this.customers = customersData;
        this.amount = this.customers.length;
      });
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are u sure?')) {
      this.customerService
        .deleteCustomer(customer)
        .then(() => {
          this.router.navigateByUrl('/Home/Customers');
          this.showSuccess('', 'Customer Deleted Successfully');
        })
        .catch((err) => {
          console.log(err);
          this.showError('Something went wrong...', 'Oops!');
        });
    }
  }
  cardsOrTable(): void {
    this.table = !this.table;
    console.log(this.table);
  }

  sort(order: any) {
    this.setOrder = order;
    console.log(this.setOrder);
    this.isDescOrder;
  }

  getSort(): string {
    if (this.setOrder == '') return 'All';
    else return this.setOrder;
  }

  showCustomer(customer: Customer): void {
    const modalRef = this.modal.open(ShowCustomerComponent, {
      scrollable: true,
      centered: true,
      animation: true,
      keyboard: true,
      windowClass: 'my-class',
    });
    modalRef.componentInstance.id = customer.id;
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
