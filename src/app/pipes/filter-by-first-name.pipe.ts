import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'filterByFirstName',
})
export class FilterByFirstNamePipe implements PipeTransform {
  transform(
    customers: Customer[],
    propName: keyof Customer,
    value: string
  ): Customer[] {
    let customerArr: Customer[] = [];
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
