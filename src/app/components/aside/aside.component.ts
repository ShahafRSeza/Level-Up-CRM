import { Component, Input, OnInit } from '@angular/core';
import { CustomersServiceService } from 'src/app/services/customers-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  darkMode() {
    document.body.classList.toggle('darkMode');
  }
}
