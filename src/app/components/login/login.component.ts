import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submitLogin(): void {
    this.authService
      .login(this.user)
      .then((data) => {
        this.authService.setSessionData('username', data.user.email as string);
        this.authService.setSessionData('isLoggedIn', 'true');
        this.router.navigateByUrl('/Home/Customers');
        this.showSuccess(
          `${data.user.email as string}`,
          'Sign in successfully'
        );
      })
      .catch((err) => {
        this.showError('Wrong Email or Password', 'Oops..');
        this.user = { email: '', password: '' };
      });
  }

  submitLoginWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then((data) => {
        console.log(data.user);
        this.authService.setSessionData(
          'username',
          data.user.displayName as string
        );
        this.authService.setSessionData(
          'userPic',
          data.user.photoURL as string
        );
        this.authService.setSessionData('isLoggedIn', 'true');
        this.router.navigateByUrl('/Home/Customers');
        this.showSuccess(
          `Connected as ${data.user.displayName as string}`,
          'Sign in successfully'
        );
      })
      .catch((err) => {
        console.log(err);
        this.showError('Somthing went wrong', 'Oops..');
      });
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

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
