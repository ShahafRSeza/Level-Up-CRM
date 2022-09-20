import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = {
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
  customerId: number = 0;
  activeModal: any;
  constructor(
    private customerService: CustomersServiceService,
    private modal: NgbActiveModal,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.customerService
        .getCustomerbyId(this.id)
        .subscribe((customerData: Customer) => {
          this.customer = customerData;
        });
    }
  }

  closeModal() {
    this.modal.close();
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are u sure?')) {
      this.customerService
        .deleteCustomer(customer)
        .then(() => {
          this.router.navigateByUrl('/Home/Customers');
          this.showSuccess('', 'Customer Deleted Successfully');
          this.closeModal();
        })
        .catch((err) => console.log(err));
    } else {
      this.router.navigateByUrl('/Home/Customers');
      this.closeModal();
    }
  }

  navigateTO(href: string) {
    this.closeModal();
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
