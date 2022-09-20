import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'Customers', component: CustomersComponent },
      { path: 'Customers/:id', component: EditCustomerComponent },
      { path: 'AddCustomer', component: AddCustomerComponent },
      { path: 'Contacts', component: ContactsComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
  { path: 'AccessDenied', component: AccessDeniedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
