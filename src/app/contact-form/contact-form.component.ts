// contact-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData: any = {}; // Initialize formData object to store form data
  successMessage: string | null = null;
  errorMessage: string | null = null;

  onSubmit() {
    // Handle the form submission here, e.g., send data to the server

    // Simulate form submission success
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.successMessage = 'Form submitted successfully.';
      this.errorMessage = null;
      console.log('Form data submitted:', this.formData);

      // Reset the form data to clear the input fields
      this.formData = {};
    } else {
      this.successMessage = null;
      this.errorMessage = 'Please fill in all required fields.';
    }

    // You may want to send the data to your server using Angular's HttpClient or other methods.
  }
}
