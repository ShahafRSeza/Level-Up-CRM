import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from 'src/app/interfaces/Contacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[] = [];

  propName: string = '';

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.contactList();
  }
}
