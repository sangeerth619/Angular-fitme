import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (this.authService.register(this.username, this.email, this.password)) {
      this.router.navigate(['/login']);
    } else {
      alert('Registration failed');
    }
  }
}
