import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  imports: [CommonModule],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css',
})
export class OurClients {
  partnerLogos: string[] = [
    '../../../assets/client-logo/logo-1.png',
    '../../../assets/client-logo/logo-2.png',
    '../../../assets/client-logo/logo-3.png',
    '../../../assets/client-logo/logo-4.png',
    '../../../assets/client-logo/logo-5.png',
    '../../../assets/client-logo/logo-6.png',
    '../../../assets/client-logo/logo-7.png',
    '../../../assets/client-logo/logo-8.png',
    '../../../assets/client-logo/logo-9.png',
    '../../../assets/client-logo/logo-10.png',
    '../../../assets/client-logo/logo-11.webp',
    '../../../assets/client-logo/logo-12.jpg',
    '../../../assets/client-logo/logo-13.png',
    '../../../assets/client-logo/logo-14.png',
    '../../../assets/client-logo/logo-15.png',
    '../../../assets/client-logo/logo-16.png',
    '../../../assets/client-logo/logo-17.jpg',
    '../../../assets/client-logo/logo-18.jpg',
    '../../../assets/client-logo/logo-19.png',
    '../../../assets/client-logo/logo-20.png',
    '../../../assets/client-logo/logo-21.png',
    '../../../assets/client-logo/logo-22.jpg',
    '../../../assets/client-logo/logo-23.jpg',
    '../../../assets/client-logo/logo-24.png',
  ];

  testimonialCertificates = [
    {
      image: '../../../assets/testimonials/testimonial 1.webp',
      title: 'Aspiration Energy Pvt Ltd',
    },
    {
      image: '../../../assets/testimonials/testimonial 2.webp',
      title: 'Greaves Cotton Limited',
    },
    {
      image: '../../../assets/testimonials/testimonial 3.webp',
      title: 'Ashok Leyland',
    },
    {
      image: '../../../assets/testimonials/testimonail 4.webp',
      title: 'United Industries',
    },
    {
      image: '../../../assets/testimonials/testimonial 5.webp',
      title: 'Funskool India Ltd',
    },
    {
      image: '../../../assets/testimonials/testimonial 6.webp',
      title: 'International Project – Oman',
    },
  ];
   activeCertificate: string | null = null;

   zoomLevel = 1;
maxZoom = 2.5;
minZoom = 1;

zoomIn(event: Event) {
  event.stopPropagation();
  if (this.zoomLevel < this.maxZoom) {
    this.zoomLevel += 0.2;
  }
}

zoomOut(event: Event) {
  event.stopPropagation();
  if (this.zoomLevel > this.minZoom) {
    this.zoomLevel -= 0.2;
  }
}

resetZoom(event: Event) {
  event.stopPropagation();
  this.zoomLevel = 1;
}

  openLightbox(image: string) {
    this.activeCertificate = image;
    this.zoomLevel = 1;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.activeCertificate = null;
    document.body.style.overflow = '';
  }
  
}

