import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  // Services array
  services = [
    'Fire Risk Assessment & System Design',
    'Hydrant & Sprinkler Systems Installation',
    'Fire Alarm & Detection Systems',
    'Pump Room Setup',
    'Piping Network & Valve Installation',
    'Testing & Commissioning'
  ];

  // Method to handle button click
  requestConsultation() {
    alert('Thank you for your interest! Our fire safety expert will contact you within 24 hours.');
  }

}
