import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  activeImage: string | null = null;
  currentIndex = 0;
  currentImages: string[] = [];
  zoomLevel = 1;

  gallerySections = [
    {
      title: 'Employee Appreciation Moments',
      images: [
        'assets/gallery/gift-employee/gallery-family.webp',
        'assets/gallery/gift-employee/employee-1.webp',
        'assets/gallery/gift-employee/employee-2.webp',
        'assets/gallery/gift-employee/employee-3.webp',
        'assets/gallery/gift-employee/employee-4.webp',
        'assets/gallery/gift-employee/employee-5.webp',
        'assets/gallery/gift-employee/employee-6.webp',
        'assets/gallery/gift-employee/employee-7.webp',
        'assets/gallery/gift-employee/employee-8.webp',
        'assets/gallery/gift-employee/employee-9.webp',
        'assets/gallery/gift-employee/employee-10.webp',
        'assets/gallery/gift-employee/employee-11.webp',
        'assets/gallery/gift-employee/employee-12.webp',
        'assets/gallery/gift-employee/employee-13.webp',
        'assets/gallery/gift-employee/employee-14.webp',
        'assets/gallery/gift-employee/employee-15.webp',
        'assets/gallery/gift-employee/employee-16.webp',
        'assets/gallery/gift-employee/employee_team.webp',
        'assets/gallery/gift-employee/award_1.webp',
        'assets/gallery/gift-employee/award_2.webp'

      ]
    },
    {
      title: 'Industrial Installations',
      images: [
        'assets/gallery/gallery-1/21.webp',
        'assets/gallery/gallery-1/22.webp',
        'assets/gallery/gallery-1/23.webp',
        'assets/gallery/gallery-1/24.webp',
        'assets/gallery/gallery-1/25.webp',
        'assets/gallery/gallery-1/26.webp',
        'assets/gallery/gallery-1/27.webp',
        'assets/gallery/gallery-1/28.webp',
        'assets/gallery/gallery-1/29.webp',
        'assets/gallery/gallery-1/30.webp',
        'assets/gallery/gallery-1/31.webp',
        'assets/gallery/gallery-1/1.webp',
        'assets/gallery/gallery-1/2.webp',
        'assets/gallery/gallery-1/3.webp',
        'assets/gallery/gallery-1/4.webp',
        'assets/gallery/gallery-1/5.webp',
        'assets/gallery/gallery-1/6.webp',
        'assets/gallery/gallery-1/7.webp',
        'assets/gallery/gallery-1/8.webp',
        'assets/gallery/gallery-1/9.webp',
        'assets/gallery/gallery-1/10.webp',
        'assets/gallery/gallery-1/11.webp',
        'assets/gallery/gallery-1/12.webp',
        'assets/gallery/gallery-1/13.jpg',
        'assets/gallery/gallery-1/14.jpg',
        'assets/gallery/gallery-1/15.jpg',
        'assets/gallery/gallery-1/16.jpg',
        'assets/gallery/gallery-1/17.jpg',
        'assets/gallery/gallery-1/18.jpg',
        'assets/gallery/gallery-1/19.jpg',
        'assets/gallery/gallery-1/20.jpg',
      ]
    },
    {
      title: 'Cooling Solutions',
      images: [
        'assets/gallery/gallery-2/10.webp',
        'assets/gallery/gallery-2/11.webp',
        'assets/gallery/gallery-2/12.webp',
        'assets/gallery/gallery-2/13.webp',
        'assets/gallery/gallery-2/14.webp',
        'assets/gallery/gallery-2/15.webp',
        'assets/gallery/gallery-2/1.webp',
        'assets/gallery/gallery-2/2.webp',
        'assets/gallery/gallery-2/3.webp',
        'assets/gallery/gallery-2/4.webp',
        'assets/gallery/gallery-2/5.webp',
        'assets/gallery/gallery-2/6.webp',
        'assets/gallery/gallery-2/7.webp',
        'assets/gallery/gallery-2/8.webp',
        'assets/gallery/gallery-2/9.webp',
      ]
    },
    {
      title: 'Piping Infrastructure',
      images: [
         'assets/gallery/gallery-3/6.webp',
        'assets/gallery/gallery-3/7.webp',
        'assets/gallery/gallery-3/8.webp',
        'assets/gallery/gallery-3/9.webp',
        'assets/gallery/gallery-3/10.webp',
         'assets/gallery/gallery-3/11.webp',
        'assets/gallery/gallery-3/12.webp',
        'assets/gallery/gallery-3/13.webp',
        'assets/gallery/gallery-3/1.webp',
        'assets/gallery/gallery-3/2.webp',
        'assets/gallery/gallery-3/3.webp',
        'assets/gallery/gallery-3/4.webp',
        'assets/gallery/gallery-3/5.webp',
      ]
    },
    {
      title: 'Plant Engineering',
      images: [
        'assets/gallery/gallery-4/12.webp',
        'assets/gallery/gallery-4/13.webp',
        'assets/gallery/gallery-4/14.webp',
        'assets/gallery/gallery-4/15.webp',
        'assets/gallery/gallery-4/16.webp',
        'assets/gallery/gallery-4/17.webp',
        'assets/gallery/gallery-4/18.webp',
        'assets/gallery/gallery-4/11.webp',
        'assets/gallery/gallery-4/1.webp',
        'assets/gallery/gallery-4/2.webp',
        'assets/gallery/gallery-4/3.webp',
        'assets/gallery/gallery-4/4.webp',
        'assets/gallery/gallery-4/5.webp',
        'assets/gallery/gallery-4/6.webp',
        'assets/gallery/gallery-4/7.webp',
        'assets/gallery/gallery-4/8.webp',
        'assets/gallery/gallery-4/9.webp',
        'assets/gallery/gallery-4/10.webp',
       
      ]
    },
    {
      title: 'Site Executions',
      images: [
         'assets/gallery/gallery-5/5.webp',
        'assets/gallery/gallery-5/6.webp',
        'assets/gallery/gallery-5/7.webp',
        'assets/gallery/gallery-5/8.webp',
         'assets/gallery/gallery-5/9.webp',
        'assets/gallery/gallery-5/10.webp',
        'assets/gallery/gallery-5/11.webp',
        'assets/gallery/gallery-5/1.webp',
        'assets/gallery/gallery-5/2.webp',
        'assets/gallery/gallery-5/3.webp',
        'assets/gallery/gallery-5/4.webp',
      ]
    }
  ];

  openLightbox(images: string[], index: number) {
    this.currentImages = images;
    this.currentIndex = index;
    this.activeImage = images[index];
    this.zoomLevel = 1;
  }

  closeLightbox() {
    this.activeImage = null;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
    this.activeImage = this.currentImages[this.currentIndex];
    this.zoomLevel = 1;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.activeImage = this.currentImages[this.currentIndex];
    this.zoomLevel = 1;
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.2, 3);
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.2, 1);
  }

  @HostListener('document:keydown.escape') onEsc() {
    this.closeLightbox();
  }

  @HostListener('document:keydown.arrowright') onRight() {
    if (this.activeImage) this.next();
  }

  @HostListener('document:keydown.arrowleft') onLeft() {
    if (this.activeImage) this.prev();
  }
}
