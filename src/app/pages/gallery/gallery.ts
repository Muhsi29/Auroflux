import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      title: 'Industrial Installations',
      images: [
        'assets/gallery/gallery-1/1.webp',
        'assets/gallery/gallery-1/2.webp',
        'assets/gallery/gallery-1/3.webp',
        'assets/gallery/gallery-1/4.webp',
        'assets/gallery/gallery-1/5.webp',
        'assets/gallery/gallery-1/6.webp',
        'assets/gallery/gallery-1/7.webp',
        'assets/gallery/gallery-1/8.webp',
        'assets/gallery/gallery-1/9.webp',
      ]
    },
    {
      title: 'Cooling Solutions',
      images: [
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
        'assets/gallery/gallery-4/11.webp',
      ]
    },
    {
      title: 'Site Executions',
      images: [
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
