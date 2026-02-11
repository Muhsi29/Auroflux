import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {

  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  successMessage = '';
  errorMessage = '';

  // private apiUrl = 'http://localhost/Auroflux/api/send-mail.php';
  // Replace 'yourdomain.com' with your actual website address
  private apiUrl = 'https://auroflux.com/api/send-mail.php';


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9\\-\\+]{9,15}$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.isLoading = true;

    this.http.post<any>(this.apiUrl, this.contactForm.value)
      .subscribe({
        next: (res) => {
          this.isLoading = false;

          if (res.success) {
            this.successMessage = res.message;
            this.contactForm.reset();
            this.isSubmitted = false;
          } else {
            this.errorMessage = res.message || 'Something went wrong.';
          }
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Server error. Please try again later.';
        }
      });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get message() { return this.contactForm.get('message'); }
}
