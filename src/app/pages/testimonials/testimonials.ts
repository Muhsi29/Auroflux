import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-testimonials',
   standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  constructor(private router: Router) {}
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
      title: 'MRF Corp Limited',
    },
    {
      image: '../../../assets/testimonials/testimonail 4.webp',
      title: 'Southern Polymers',
    },
    {
      image: '../../../assets/testimonials/testimonial 5.webp',
      title: 'Super Auto Forge Private Limited',
    },
    {
      image: '../../../assets/testimonials/testimonial 6.webp',
      title: 'Tablets (India) Limited',
    },
  ];

  // Two copies back to back for a seamless infinite slider
  sliderCertificates = [...this.testimonialCertificates, ...this.testimonialCertificates];

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
  goCta() {
  this.router.navigate(['/contact']);
} 

}
