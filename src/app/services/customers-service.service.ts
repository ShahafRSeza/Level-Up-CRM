import { Injectable } from '@angular/core';
import {
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { addDoc, collection, DocumentReference } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersServiceService {
  customerRef = collection(this.fireStore, 'customers');
  constructor(private fireStore: Firestore) {}

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customerRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }

  addCustomer(customer: Customer): Promise<DocumentReference<Customer>> {
    return addDoc(this.customerRef, customer) as Promise<
      DocumentReference<Customer>
    >;
  }

  editCustomer(customer: Customer): Promise<void> {
    const customerRef = doc(this.fireStore, `customers/${customer.id}`);
    return setDoc(customerRef, customer) as Promise<void>;
  }

  getCustomerbyId(id: string): Observable<Customer> {
    const customerRef = doc(this.fireStore, `customers/${id}`);
    return docData(customerRef, { idField: 'id' }) as Observable<Customer>;
  }

  deleteCustomer(customer: Customer): Promise<void> {
    const customerRef = doc(this.fireStore, `customers/${customer.id}`);
    return deleteDoc(customerRef) as Promise<void>;
  }
}
