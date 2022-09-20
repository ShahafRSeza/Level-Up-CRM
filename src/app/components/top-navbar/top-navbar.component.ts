import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css'],
})
export class TopNavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  getUsername(): string {
    return this.authService.getSessionData('username');
  }

  getUserPhoto(): string {
    return this.authService.getSessionData('userPic');
  }

  logOut() {
    this.authService.logout().then(() => {
      this.authService.setSessionData('isLoggedIn', 'false');
      this.router.navigateByUrl('Login');
      this.showSuccess(``, 'Logged Out successfully');
    });
  }

  showSuccess(text: string, title: string) {
    this.toastr.success(text, title, {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    });
  }
}
