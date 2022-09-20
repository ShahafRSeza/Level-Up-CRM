import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from '../interfaces/Contacts';

@Pipe({
  name: 'filterContacts',
})
export class FilterContactsPipe implements PipeTransform {
  transform(
    customers: Contacts[],
    propName: keyof Contacts,
    value: string
  ): Contacts[] {
    let customerArr: Contacts[] = [];
    for (let customer of customers) {
      if (
        (customer[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        customerArr.push(customer);
      }
    }
    return customerArr;
  }
}
