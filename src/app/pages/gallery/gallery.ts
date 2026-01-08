import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  gallery = [
    {
      title: 'Compressed Air Line',
      images: [
        'assets/gallery/gallery-1-1.webp',
        'assets/gallery/gallery-1-2.webp',
        'assets/gallery/gallery-1-3.webp',
        'assets/gallery/gallery-1-4.webp',
        'assets/gallery/gallery-1-5.webp',
        
      ]
    },
    {
      title: 'Chiller Gallery',
      images: [
        'assets/gallery/2-min.webp',
        'assets/gallery/gallery-2-2.webp',
        'assets/gallery/galler-2-3.webp',
        'assets/gallery/gallery-2-4.webp',
        'assets/gallery/gallery-2-5.webp',
      ]
    },
    {
      title: 'Cooling Tower Gallery',
      images: [
        'assets/gallery/gallery-3-1.webp',
        'assets/gallery/gallery-3-2.webp',
        'assets/gallery/gallery-3-3.webp',
        'assets/gallery/gallery-3-4.webp',
        'assets/gallery/gallery-3-5.webp',
      ]
    },
    {
      title: 'Solar Hot Water',
      images: [
        'assets/gallery/1-2.webp',
        'assets/gallery/2-2.webp',
        'assets/gallery/3-2.webp',
        'assets/gallery/4-2.webp',
        'assets/gallery/3-2.webp',
        'assets/gallery/8-1.webp',
      ]
    },
    {
      title: 'Dry Cooler Gallery',
      images: [
        'assets/gallery/2-3.webp',
        'assets/gallery/gallery-5-3.webp',
        'assets/gallery/gallery-5-4.webp',
      ]
    }
  ];

  lightboxOpen = false;
  isZoomed = false;
  activeTopicIndex = 0;
  activeImageIndex = 0;

  get activeImage() {
    return this.gallery[this.activeTopicIndex].images[this.activeImageIndex];
  }

  get activeTopic() {
    return this.gallery[this.activeTopicIndex];
  }

  openLightbox(topicIndex: number, imageIndex: number) {
    this.activeTopicIndex = topicIndex;
    this.activeImageIndex = imageIndex;
    this.lightboxOpen = true;
    this.isZoomed = false;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.isZoomed = false;
    document.body.style.overflow = '';
  }

  nextImage() {
    const images = this.gallery[this.activeTopicIndex].images;
    this.activeImageIndex = (this.activeImageIndex + 1) % images.length;
    this.isZoomed = false; // Reset zoom when changing images
  }

  prevImage() {
    const images = this.gallery[this.activeTopicIndex].images;
    this.activeImageIndex = (this.activeImageIndex - 1 + images.length) % images.length;
    this.isZoomed = false; // Reset zoom when changing images
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

  handleImageClick(event: MouseEvent) {
    if (this.isZoomed) {
      // If zoomed, clicking should zoom out
      this.isZoomed = false;
      event.stopPropagation();
    }
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      switch (event.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowRight':
          this.nextImage();
          event.preventDefault();
          break;
        case 'ArrowLeft':
          this.prevImage();
          event.preventDefault();
          break;
        case 'z':
        case 'Z':
          this.toggleZoom();
          event.preventDefault();
          break;
      }
    }
  }
}