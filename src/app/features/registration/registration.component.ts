// src/app/core/authentication/registration/registration.component.ts
import { Component } from '@angular/core';
import { RegistrationService, RegisterRequest } from '../../core/services/registration.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  model: RegisterRequest = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '' // Default role or leave empty for user selection
  };

  submitted = false;
  errorMessage = '';

  constructor(private registrationService: RegistrationService, private router: Router) {}


  register(): void {
    this.submitted = true;
    this.errorMessage = '';
    this.registrationService.register(this.model).subscribe({
      next: () => {
        console.log('Registration successful');
        this.router.navigate(['/login']);
        // Navigate to a different page or show success message
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again.';
        // Optionally process error to display more detailed message
      }
    });
  }
}
